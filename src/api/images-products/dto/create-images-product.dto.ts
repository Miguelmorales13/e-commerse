import { IsNumberString, IsString } from "class-validator";
import { ApiExtraModels, ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

@ApiExtraModels()
export class CreateImagesProductDto {
  image?: string;
  @ApiProperty({ format: "binary", required: true })
  @Expose() file?: string;
  @ApiProperty({ required: true })
  @IsString({ message: "the title is required" })
  @Expose() title?: string;
  size?: string;
  dimensions?: string;
  @ApiProperty({ required: true })
  @IsNumberString({}, { message: "the product is required" })
  @Expose() productId?: number;
}
