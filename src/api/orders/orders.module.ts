import { Module } from "@nestjs/common";
import { OrdersService } from "./orders.service";
import { OrdersController } from "./orders.controller";
import { OrderProvider } from "./order.provider";

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, ...OrderProvider]
})
export class OrdersModule {
}
