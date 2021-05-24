import { CreateClientDto } from "./create-client.dto";
import { IsNumber } from "class-validator";
import { Expose } from "class-transformer";
import { OmitType, PartialType } from "@nestjs/mapped-types";

export class UpdateClientDto extends PartialType(OmitType(CreateClientDto, ["password"])) {
  @IsNumber({}, { message: "id is required for updatetion" })
  @Expose() id?: number;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}
