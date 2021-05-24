import { CreateProductDto } from "./create-product.dto";
import { IsNumberString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class UpdateProductDto extends CreateProductDto {
  @ApiProperty({ required: true })
  @IsNumberString({}, { message: "id is required for updatetion" })
  @Expose() id?: number;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}
