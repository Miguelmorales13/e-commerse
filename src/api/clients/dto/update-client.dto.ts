import { PartialType } from "@nestjs/mapped-types";
import { CreateClientDto } from "./create-client.dto";
import { IsNumber } from "class-validator";

export class UpdateClientDto extends PartialType(CreateClientDto) {
  @IsNumber({}, { message: "id is required for updatetion" })
  id?: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}
