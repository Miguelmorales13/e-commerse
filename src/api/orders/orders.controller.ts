import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { OrdersService } from "./orders.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { ApiBadRequestResponse, ApiBearerAuth, ApiConflictResponse, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";

@ApiTags("orders")
@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"))
@Controller("orders")
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {
  }

  @Post()
  @ApiOperation({ summary: "This endpoint is for creating of a order" })
  @ApiCreatedResponse({ description: "the order was created successful" })
  @ApiBadRequestResponse({ description: "the order wasn't created because some field was not correct " })
  @ApiConflictResponse({ description: "the order wasn't created because this order already exist" })
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  @ApiOperation({ summary: "This endpoint is for getting all orders" })
  @ApiOkResponse({ description: "orders wanted" })
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "This endpoint is for getting a order by id" })
  findOne(@Param("id") id: string) {
    return this.ordersService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "This endpoint is for update a order by id" })
  @ApiOkResponse({ description: "the order was updated successful" })
  @ApiBadRequestResponse({ description: "the order wasn't updated because some field was not correct " })
  update(@Param("id") id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(+id, updateOrderDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "This endpoint is for deletion of a order by id" })
  @ApiOkResponse({ description: "the order was deleted successful" })
  remove(@Param("id") id: string) {
    return this.ordersService.remove(+id);
  }
}
