import { Inject, Injectable } from "@nestjs/common";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { SequelizeCrudService } from "../crud/sequelize-crud-service";
import { Order } from "./entities/order.entity";
import { OrderProvider } from "./order.provider";
import { getModelToken } from "@nestjs/sequelize";

@Injectable()
export class OrdersService extends SequelizeCrudService<Order, CreateOrderDto, UpdateOrderDto> {
  constructor(@Inject(getModelToken(Order)) private readonly orderProvider: typeof OrderProvider) {
    super(orderProvider);
  }
}
