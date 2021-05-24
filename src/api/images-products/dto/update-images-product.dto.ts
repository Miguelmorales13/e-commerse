import { CreateImagesProductDto } from "./create-images-product.dto";
import { IsNumberString } from "class-validator";
import { Expose } from "class-transformer";

export class UpdateImagesProductDto extends CreateImagesProductDto {
  @IsNumberString({}, { message: "id is required for updatetion" })
  @Expose() id?: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;

}

