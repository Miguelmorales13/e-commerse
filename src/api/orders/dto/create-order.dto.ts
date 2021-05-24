import { ApiExtraModels, ApiProperty } from "@nestjs/swagger";
import { EnumStatusOrder, EnumStatusPayment, TypeStatusOrder, TypeStatusPayment } from "../entities/order.entity";
import { IsNumber } from "class-validator";

@ApiExtraModels()
export class CreateOrderDto {
  @ApiProperty({ enum: EnumStatusOrder })
  statusOrder?: TypeStatusOrder;
  @ApiProperty({ enum: EnumStatusPayment })
  statusPayment?: TypeStatusPayment;
  @IsNumber({}, { message: "the address is required" })
  clientAddressId?: number;
  @IsNumber({}, { message: "the address is required" })
  clientId?: number;

}
