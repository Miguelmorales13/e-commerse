import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";
import { IsNumber } from "class-validator";

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsNumber({}, { message: "id is required for updatetion" })
  id?: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}
