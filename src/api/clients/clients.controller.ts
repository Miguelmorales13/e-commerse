import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { ClientsService } from "./clients.service";
import { CreateClientDto } from "./dto/create-client.dto";
import { UpdateClientDto } from "./dto/update-client.dto";
import { ApiBadRequestResponse, ApiBearerAuth, ApiConflictResponse, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import {AuthGuard} from "@nestjs/passport";
// import { AuthGuard } from "@nestjs/passport";

@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"))
@Controller("clients")
@ApiTags("clients")
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {
  }

  @Post()
  @ApiOperation({ summary: "This endpoint is for creating of a client" })
  @ApiCreatedResponse({ description: "the client was created successful" })
  @ApiBadRequestResponse({ description: "the client wasn't created because some field was not correct " })
  @ApiConflictResponse({ description: "the client wasn't created because this usr already exist" })
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientsService.create(createClientDto);
  }

  @Get()
  @ApiOperation({ summary: "This endpoint is for getting all clients" })
  @ApiOkResponse({ description: "clients wanted" })
  findAll() {
    return this.clientsService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "This endpoint is for getting a client by id" })
  findOne(@Param("id") id: string) {
    return this.clientsService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "This endpoint is for update a client by id" })
  @ApiOkResponse({ description: "the client was updated successful" })
  @ApiBadRequestResponse({ description: "the client wasn't updated because some field was not correct " })
  update(@Param("id") id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientsService.update(+id, updateClientDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "This endpoint is for deletion of a client by id" })
  @ApiOkResponse({ description: "the client was deleted successful" })
  remove(@Param("id") id: string) {
    return this.clientsService.remove(+id);
  }
}
