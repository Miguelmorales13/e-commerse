import { IsString } from "class-validator";

export class CreateClientsAddressDto {
  @IsString({ message: "street and number is requred" })
  streetAndNumber?: string;
  @IsString({ message: "city is requred" })
  city?: string;
  @IsString({ message: "zipcode is requred" })
  zipCode?: string;
  @IsString({ message: "state is requred" })
  state?: string;
  @IsString({ message: "latitude is requred" })
  lat?: string;
  @IsString({ message: "longitud is requred" })
  lng?: string;
}
