import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ICategoryService } from './interfaces/category.service';
import { ResData } from 'src/lib/resData';
import { CategoryEntity } from './entities/Category.entity';
import { ID } from 'src/common/types/type';
import { ICategoryRepository } from './interfaces/category.repository';
import { CategoryNotFoundException } from './exception/category.exception';
import { UserEntity } from '../user/entities/user.entity';

@Injectable()
export class CategoryService implements ICategoryService {
  constructor(
    @Inject('ICategoryRepository')
    private readonly categoryRepository: ICategoryRepository,
  ) {}

  async findByTitle(
    title: string,
  ): Promise<ResData<CategoryEntity | undefined>> {
    const foundCategory = await this.categoryRepository.findByTitle(title);

    const response = new ResData('success', 200, foundCategory);

    if (!foundCategory) {
      response.message = 'Category not found';
      response.statusCode = HttpStatus.NOT_FOUND;
    }

    return response;
  }

  async create(
    dto: CreateCategoryDto,
    currentUser: UserEntity,
  ): Promise<ResData<CategoryEntity>> {
    const newCategoryEntity = new CategoryEntity(dto);
    newCategoryEntity.created_by = currentUser.id;

    const newCategory = await this.categoryRepository.insert(newCategoryEntity);

    return new ResData<CategoryEntity>('created', 201, newCategory);
  }

  async update(
    dto: UpdateCategoryDto,
    id: number
  ): Promise<ResData<CategoryEntity>> {
    
    const {data: foundOne} = await this.findOneById(id)
    
    const assignedData = Object.assign(foundOne, dto);

    const updated = await this.categoryRepository.update(assignedData, id);

    return new ResData<CategoryEntity>('updated', 200, updated);
  }

  async remove(
    id: number
  ): Promise<ResData<CategoryEntity>> {
    
    await this.findOneById(id)
    
    const deleted = await this.categoryRepository.remove(id);

    return new ResData<CategoryEntity>('deleted', 200, deleted);
  }

  async findAll(): Promise<ResData<CategoryEntity[]>> {
    const foundCategories = await this.categoryRepository.findAll();

    return new ResData<Array<CategoryEntity>>('success', 200, foundCategories);
  }

  async findOneById(id: ID): Promise<ResData<CategoryEntity>> {
    const foundCategory = await this.categoryRepository.findOneById(id);

    if (!foundCategory) {
      throw new CategoryNotFoundException();
    }

    return new ResData<CategoryEntity>('success', 200, foundCategory);
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

}
