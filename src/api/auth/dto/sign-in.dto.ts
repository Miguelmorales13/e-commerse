import { IsEmail, IsString } from "class-validator";

export class SignInDto {
  @IsEmail({}, { message: "the user don't have format correct" })
  @IsString({ message: "user is required for sign in" })
  user: string;

  @IsString({ message: "password is required for sign in" })
  password: string;
}