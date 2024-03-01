import { ID } from 'src/common/types/type';
import { CreateCategoryDto } from '../dto/create-category.dto';

export class CategoryEntity {
  id: ID;
  title: string;
  description: string;
  created_by: number;
  last_updated_by: number;
  created_at: Date;
  last_updated_at: Date;

  constructor(dto: CreateCategoryDto) {
    this.title = dto.title;
    this.description = dto.description;
  }
}
