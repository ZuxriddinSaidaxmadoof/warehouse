import { ID } from 'src/common/types/type';
import { ProductEntity } from '../entities/product.entity';

export interface IProductRepository {
  insert(entity: ProductEntity): Promise<ProductEntity>;
  update(entity: ProductEntity, id: number): Promise<ProductEntity>;
  findOneById(id: ID): Promise<ProductEntity | undefined>;
  findOneByName(name: string): Promise<ProductEntity | undefined>;
  remove(id: ID): Promise<ProductEntity | undefined>;
  findAll(): Promise<Array<ProductEntity>>;
}
