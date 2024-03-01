import { Module } from '@nestjs/common';
import { CategoryModule } from './modules/category/category.module';
import { ProductModule } from './modules/product/product.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [CategoryModule, ProductModule, UserModule, AuthModule],
})
export class AppModule {}
