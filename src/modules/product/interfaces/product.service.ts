import { ID } from 'src/common/types/type';
import { ResData } from 'src/lib/resData';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { ProductEntity } from '../entities/product.entity';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';

export interface ICategoryService {
  findOneById(id: ID): Promise<ResData<ProductEntity>>;
  findAll(): Promise<ResData<Array<ProductEntity>>>;
  create(
    dto: CreateProductDto,
    currentUser: UserEntity,
  ): Promise<ResData<ProductEntity>>;
  update(
    dto: UpdateProductDto,
    id: number,
  ): Promise<ResData<ProductEntity>>;
  remove(id: ID): Promise<ResData<ProductEntity>>;
}
