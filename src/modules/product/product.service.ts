import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './product.repository';
import { IProductRepository } from './interfaces/product.repository';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(@Inject("IProductRepository") private readonly repository: IProductRepository){}
  
  async create(createProductDto: CreateProductDto) {
    const checkNameExist = await this.repository.findOneByName(createProductDto.name);
    if(checkNameExist){
      throw new BadRequestException("Name already exist")
    }
    const newProduct = new ProductEntity(createProductDto);
    return await this.repository.insert(newProduct)
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: number) {
    return await this.repository.findOneById(id);
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const oldProduct = this.repository.findOneById(id);
    if(oldProduct){
      throw new BadRequestException("Product not found")
    }
    const readyToUpdate = Object.assign(oldProduct, updateProductDto);


    // return await this.repository.update(new ProductEntity(readyToUpdate), id);
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
