import { CreateClientsAddressDto } from "./create-clients-address.dto";
import { IsNumber } from "class-validator";

export class UpdateClientsAddressDto extends CreateClientsAddressDto {
  @IsNumber({}, { message: "id is required for updatetion" })
  id?: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}
