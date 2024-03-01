import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { UserService } from '../user/user.service';
import { UserRepository } from '../user/user.repository';
import { CategoryRepository } from './category.repository';

@Module({
  controllers: [CategoryController],
  providers: [
    { provide: 'ICategoryService', useClass: CategoryService },
    { provide: 'ICategoryRepository', useClass: CategoryRepository },
    { provide: 'IUserService', useClass: UserService },
    { provide: 'IUserRepository', useClass: UserRepository },
  ],
})
export class CategoryModule {}
