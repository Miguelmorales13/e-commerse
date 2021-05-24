import { IsNumber, IsString } from "class-validator";

export class CreateCategoriesProductDto {
  @IsString({ message: "name is required" })
  name?: string;

  nivel?: number;

  @IsNumber({}, { message: "name is required" })
  categoryId?: number;
}
