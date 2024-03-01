import { ID } from "src/common/types/type";
import { CreateProductDto } from "../dto/create-product.dto";

export class ProductEntity {
    id: ID;
    name: string;
    description?: string;
    count: number;
    price: number;
    category_id: number;
    created_at?: Date;
    last_updated_at?: Date;
    created_by: number;
    last_updated_by: number;

    constructor(dto: CreateProductDto){
        this.name = dto.name;
        this.description = dto.description || null;
        this.count = dto.count || 1;
        this.price = dto.price || 0;
        this.category_id = dto.category_id;
        this.created_at = dto.created_at;
        this.last_updated_at = dto.last_updated_at;
        this.created_by = dto.created_by;
        this.last_updated_by = dto.last_updated_by;
    }
}


