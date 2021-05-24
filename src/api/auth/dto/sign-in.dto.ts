import { IsEmail, IsString } from "class-validator";
import { ApiExtraModels } from "@nestjs/swagger";
import { Expose } from "class-transformer";

@ApiExtraModels()
export class SignInDto {
  @IsEmail({}, { message: "the user don't have format correct" })
  @IsString({ message: "user is required for sign in" })
  @Expose() user: string;

  @IsString({ message: "password is required for sign in" })
  @Expose() password: string;
}
