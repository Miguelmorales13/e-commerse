import { CreateUserDto } from "./create-user.dto";
import { IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { OmitType, PartialType } from "@nestjs/mapped-types";

export class UpdateUserDto extends PartialType(OmitType(CreateUserDto, ["password"])) {
  @ApiProperty()
  @IsNumber({}, { message: "id is required for updatetion" })
  @Expose() id?: number;
  createdAt?: string;
  updatedAt?: string;
}
