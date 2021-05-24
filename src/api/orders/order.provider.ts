import { Order } from "./entities/order.entity";
import { getModelToken } from "@nestjs/sequelize";

export const OrderProvider = [
  {
    provide: getModelToken(Order),
    useValue: Order
  }
];