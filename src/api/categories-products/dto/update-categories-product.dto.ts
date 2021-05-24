import { PartialType } from "@nestjs/mapped-types";
import { CreateCategoriesProductDto } from "./create-categories-product.dto";
import { IsNumber } from "class-validator";

export class UpdateCategoriesProductDto extends PartialType(CreateCategoriesProductDto) {
  @IsNumber({}, { message: "id is required for updatetion" })
  id?: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}
