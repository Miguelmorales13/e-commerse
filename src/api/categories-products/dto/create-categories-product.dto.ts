import { IsString } from "class-validator";
import { ApiExtraModels } from "@nestjs/swagger";
import { Expose } from "class-transformer";

@ApiExtraModels()
export class CreateCategoriesProductDto {
  @IsString({ message: "name is required" })
  @Expose() name?: string;

  nivel?: number;

  @Expose() categoryId?: number;
}
