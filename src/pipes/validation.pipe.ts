import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { validate, ValidationError } from "class-validator";

@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors && errors.length > 0) {
      throw new HttpException(this.formatErrors(errors), HttpStatus.BAD_REQUEST);
    }
    return value;
  }

  private formatErrors(errors: ValidationError[]) {
    return errors.map(error => {
      for (const key in error.constraints) {
        return error.constraints[key];
      }
    }).join(", ");
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  private toValidate(metatype: Function): boolean {
    // eslint-disable-next-line @typescript-eslint/ban-types
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
