import { IsBoolean, IsEmail, IsString, ValidateIf } from "class-validator";
import { Expose } from "class-transformer";

export class CreateUserDto {
  @IsString({ message: "names is required for creation" })
  @Expose() name?: string;

  @IsString({ message: "last name is required for creation" })
  @Expose() lastName?: string;

  @IsString({ message: "second last name is required for creation" })
  @Expose() secondLastName?: string;

  @IsBoolean({ message: "the active is required" })
  @Expose() active?: boolean;

  @IsEmail({}, { message: "the email dont have correct format" })
  @IsString({ message: "email is required for creation" })
  @Expose() email?: string;

  @ValidateIf(o => !o.id)
  @IsString({ message: "password is required for creation", always: false })
  @Expose({ toPlainOnly: true, toClassOnly: true }) password?: string;
}
