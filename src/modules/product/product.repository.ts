import { ID } from 'src/common/types/type';
import { IProductRepository } from './interfaces/product.repository';
import { Postgres } from 'src/lib/pg';
import { ProductEntity } from './entities/product.entity';

export class ProductRepository
  extends Postgres
  implements IProductRepository
{
  async findOneByName(name: string): Promise<ProductEntity | undefined> {
    return await this.fetch<ProductEntity, string>(
      'select * from products where name = $1',
      name,
    );
  }

  async insert(entity: ProductEntity): Promise<ProductEntity> {
    return await this.fetch<ProductEntity, string | number>(
      'insert into products(name, description, count, price, category_id, last_updated_by ) values ($1, $2, $3, $4,$5,$6) returning *',
      entity.name,
      entity.description,
      entity.count,
      entity.price,
      entity.category_id,
      entity.last_updated_by
    );
  }


  async update(entity: ProductEntity, id: number): Promise<ProductEntity> {
    return await this.fetch<ProductEntity, string | number>(
      'update products set name = $1, description = $2, count = $3, price = $4, category_id = $5, last_updated_by = $6 where id = $7 returning *',
      entity.description,
      id
    );
  }

  async remove(id: number): Promise<ProductEntity> {
    return await this.fetch<ProductEntity, string | number>(
      'delete from products where id = $1 returning *',
      id
    );
  }

  async findAll(): Promise<Array<ProductEntity>> {
    return await this.fetchAll<ProductEntity>('select * from products');
  }

  async findOneById(id: ID): Promise<ProductEntity> {
    return await this.fetch<ProductEntity, ID>(
      'select * from products where id = $1',
      id,
    );
  }
}
