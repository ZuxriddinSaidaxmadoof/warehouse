import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Inject } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Auth } from 'src/common/decorators/Auth.decorator';
import { RoleEnum } from 'src/common/enums/enum';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Products")
@Controller('product')
export class ProductController {
  constructor(@Inject("IProductService") private readonly productService: ProductService) {}

  // @Auth(RoleEnum.ADMIN, RoleEnum.WORKER, RoleEnum.BOSS)
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
