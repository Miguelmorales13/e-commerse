import { IsEmail, IsString } from "class-validator";

export class CreateClientDto {
  @IsString({ message: "names is required for creation" })
  name?: string;

  @IsString({ message: "last name is required for creation" })
  lastName?: string;

  @IsString({ message: "second last name is required for creation" })
  secondLastName?: string;

  active?: boolean;

  @IsEmail({}, { message: "the email dont have correct format" })
  @IsString({ message: "email is required for creation" })
  email?: string;

  @IsString({ message: "password is required for creation" })
  password?: string;
}
