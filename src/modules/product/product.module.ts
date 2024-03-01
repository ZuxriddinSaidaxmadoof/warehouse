import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { UserService } from '../user/user.service';
import { UserRepository } from '../user/user.repository';
import { ProductRepository } from './product.repository';

@Module({
  controllers: [ProductController],
  providers: [
    { provide: 'IProductService', useClass: ProductService },
    { provide: 'IProductRepository', useClass: ProductRepository }  
  ],
})
export class ProductModule {}
