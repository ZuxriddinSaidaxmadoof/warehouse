import { ID } from 'src/common/types/type';
import { CategoryEntity } from './entities/category.entity';
import { ICategoryRepository } from './interfaces/category.repository';
import { Postgres } from 'src/lib/pg';

export class CategoryRepository
  extends Postgres
  implements ICategoryRepository
{
  async findByTitle(title: string): Promise<CategoryEntity | undefined> {
    return await this.fetch<CategoryEntity, string>(
      'select * from categories where title = $1',
      title,
    );
  }

  async insert(entity: CategoryEntity): Promise<CategoryEntity> {
    return await this.fetch<CategoryEntity, string | number>(
      'insert into categories(title, description, created_by) values ($1, $2, $3) returning *',
      entity.title,
      entity.description,
      entity.created_by,
    );
  }

  async update(entity: CategoryEntity, id: number): Promise<CategoryEntity> {
    return await this.fetch<CategoryEntity, string | number>(
      'update categories set title = $1, description = $2 where id = $3 returning *',
      entity.title,
      entity.description,
      id
    );
  }

  async remove(id: number): Promise<CategoryEntity> {
    return await this.fetch<CategoryEntity, string | number>(
      'delete from categories where id = $1 returning *',
      id
    );
  }

  async findAll(): Promise<Array<CategoryEntity>> {
    return await this.fetchAll<CategoryEntity>('select * from categories');
  }

  async findOneById(id: ID): Promise<CategoryEntity> {
    return await this.fetch<CategoryEntity, ID>(
      'select * from categories where id = $1',
      id,
    );
  }
}
