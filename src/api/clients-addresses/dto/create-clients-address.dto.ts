import { IsString } from "class-validator";
import { ApiExtraModels } from "@nestjs/swagger";

@ApiExtraModels()
export class CreateClientsAddressDto {
  @IsString({ message: "Street and number is requred" })
  streetAndNumber?: string;
  @IsString({ message: "City is requred" })
  city?: string;
  @IsString({ message: "Zipcode is requred" })
  zipCode?: string;
  @IsString({ message: "State is requred" })
  state?: string;
  lat?: string;
  lng?: string;
}
