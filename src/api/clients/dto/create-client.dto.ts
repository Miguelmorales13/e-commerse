import { IsEmail, IsString } from "class-validator";
import { ApiExtraModels } from "@nestjs/swagger";
import { Expose } from "class-transformer";

@ApiExtraModels()
export class CreateClientDto {
  @IsString({ message: "names is required for creation" })
  @Expose() name?: string;

  @IsString({ message: "last name is required for creation" })
  @Expose() lastName?: string;

  @IsString({ message: "second last name is required for creation" })
  @Expose() secondLastName?: string;

  @Expose() active?: boolean;

  @IsEmail({}, { message: "the email dont have correct format" })
  @IsString({ message: "email is required for creation" })
  @Expose() email?: string;

  @IsString({ message: "password is required for creation" })
  @Expose() password?: string;
}
