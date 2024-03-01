import { ID } from 'src/common/types/type';
import { ResData } from 'src/lib/resData';
import { CategoryEntity } from '../entities/Category.entity';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { UpdateCategoryDto } from '../dto/update-category.dto';

export interface ICategoryService {
  findOneById(id: ID): Promise<ResData<CategoryEntity>>;
  findAll(): Promise<ResData<Array<CategoryEntity>>>;
  create(
    dto: CreateCategoryDto,
    currentUser: UserEntity,
  ): Promise<ResData<CategoryEntity>>;
  update(
    dto: UpdateCategoryDto,
    id: number,
  ): Promise<ResData<CategoryEntity>>;
  remove(id: ID): Promise<ResData<CategoryEntity>>;
  findByTitle(title: string): Promise<ResData<CategoryEntity | undefined>>;
}
