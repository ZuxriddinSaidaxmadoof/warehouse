import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @ApiProperty({
        type: String
    })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({
        type: String
    })
    @IsString()
    description?: string | null;

    @ApiProperty({
        type: Number
    })
    @IsNumber()
    @IsNotEmpty()
    count: number;

    @ApiProperty({
        type: Number
    })
    @IsNumber()
    @IsNotEmpty()
    price: number;

    @ApiProperty({
        type: Number
    })
    @IsNumber()
    @IsNotEmpty()
    category_id: number;

    created_at?: Date;
    last_updated_at?: Date;

    @ApiProperty({
        type: Number
    })
    @IsNumber()
    @IsNotEmpty()
    created_by: number;

    @ApiProperty({
        type: Number
    })
    @IsNumber()
    last_updated_by?: number | null;
}