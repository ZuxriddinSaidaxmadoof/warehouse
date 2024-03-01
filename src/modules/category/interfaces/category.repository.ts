import { ID } from 'src/common/types/type';
import { CategoryEntity } from '../entities/category.entity';

export interface ICategoryRepository {
  insert(entity: CategoryEntity): Promise<CategoryEntity>;
  update(entity: CategoryEntity, id: number): Promise<CategoryEntity>;
  findOneById(id: ID): Promise<CategoryEntity | undefined>;
  remove(id: ID): Promise<CategoryEntity | undefined>;
  findAll(): Promise<Array<CategoryEntity>>;
  findByTitle(title: string): Promise<CategoryEntity | undefined>;
}
