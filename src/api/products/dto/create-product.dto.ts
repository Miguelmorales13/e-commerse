import {IsBooleanString, IsNumberString, IsString} from "class-validator";
import {ApiExtraModels, ApiProperty} from "@nestjs/swagger";
import {Expose} from "class-transformer";

@ApiExtraModels()
export class CreateProductDto {
    @ApiProperty({required: true})
    @IsString({message: "name is required"})
    @Expose() name?: string;
    hasMultiplesImages?: boolean;

    @ApiProperty({format: "binary", required: true})
    @Expose() mainImage?: string;

    @ApiProperty({required: true})
    @IsNumberString({}, {message: "price is required"})
    @Expose() price?: number;

    @ApiProperty({required: true})
    @IsNumberString({}, {message: "price is required"})
    @Expose() priceDiscount?: number;

    @ApiProperty({required: true})
    @IsString({message: "description is required"})
    @Expose() description?: string;

    @ApiProperty({required: true})
    @IsString({message: "price is required"})
    @Expose() brand?: string;

    @ApiProperty({required: true})
    @IsBooleanString({message: "is in discount is required"})
    @Expose() isInDiscount?: boolean;

    @ApiProperty({required: false})
    @Expose() active?: boolean;

    @ApiProperty({required: true})
    @IsNumberString({}, {message: "category is required"})
    @Expose() categoryId?: number;
}
