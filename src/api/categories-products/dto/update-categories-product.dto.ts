import { CreateCategoriesProductDto } from "./create-categories-product.dto";
import { IsNumber } from "class-validator";
import { Expose } from "class-transformer";

export class UpdateCategoriesProductDto extends CreateCategoriesProductDto {
  @IsNumber({}, { message: "id is required for updatetion" })
  @Expose() id?: number;
  createdAt: string;
  updatedAt: string;
}
