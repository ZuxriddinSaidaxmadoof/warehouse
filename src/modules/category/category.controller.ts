import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/common/decorators/Auth.decorator';
import { RoleEnum } from 'src/common/enums/enum';
import { ICategoryService } from './interfaces/category.service';
import { CurrentUser } from 'src/common/decorators/CurrentUser.decorator';
import { UserEntity } from '../user/entities/user.entity';
import { CategoryAlreadyExistException } from './exception/category.exception';

@ApiTags('category')
@Controller('category')
export class CategoryController {
  constructor(
    @Inject('ICategoryService')
    private readonly categoryService: ICategoryService,
  ) {}

  @Auth(RoleEnum.ADMIN, RoleEnum.BOSS, RoleEnum.WORKER)
  @Post()
  async create(
    @Body() createCategoryDto: CreateCategoryDto,
    @CurrentUser() currentUser: UserEntity,
  ) {
    const foundCategory = await this.categoryService.findByTitle(
      createCategoryDto.title,
    );

    if (foundCategory.data) {
      throw new CategoryAlreadyExistException();
    }

    return await this.categoryService.create(createCategoryDto, currentUser);
  }

  @Auth(RoleEnum.ADMIN)
  @Get()
  async findAll() {
    return await this.categoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.categoryService.findOneById(id);
  }

  @Auth(RoleEnum.ADMIN, RoleEnum.BOSS, RoleEnum.WORKER)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(updateCategoryDto, Number(id));
  }

  @Auth(RoleEnum.ADMIN, RoleEnum.BOSS)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(Number(id));
  }
}
