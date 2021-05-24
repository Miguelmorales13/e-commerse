import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { ClientsAddressesService } from "./clients-addresses.service";
import { CreateClientsAddressDto } from "./dto/create-clients-address.dto";
import { UpdateClientsAddressDto } from "./dto/update-clients-address.dto";
import { ApiBadRequestResponse, ApiBearerAuth, ApiConflictResponse, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";

@Controller("clients-addresses")
@ApiTags("Clients addresses")
@ApiBearerAuth()
@UseGuards(AuthGuard("jwt"))
export class ClientsAddressesController {
  constructor(private readonly clientsAddressesService: ClientsAddressesService) {
  }

  @Post()
  @ApiOperation({ summary: "This endpoint is for creating of a client addresse" })
  @ApiCreatedResponse({ description: "the client addresse was created successful" })
  @ApiBadRequestResponse({ description: "the client addresse wasn't created because some field was not correct " })
  @ApiConflictResponse({ description: "the client addresse wasn't created because this usr already exist" })
  create(@Body() createClientsAddressDto: CreateClientsAddressDto) {
    return this.clientsAddressesService.create(createClientsAddressDto);
  }

  @Get()
  @ApiOperation({ summary: "This endpoint is for getting all client addresses" })
  @ApiOkResponse({ description: "client addresses wanted" })
  findAll() {
    return this.clientsAddressesService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "This endpoint is for getting a client addresse by id" })
  findOne(@Param("id") id: string) {
    return this.clientsAddressesService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "This endpoint is for update a client addresse by id" })
  @ApiOkResponse({ description: "the client addresse was updated successful" })
  @ApiBadRequestResponse({ description: "the client addresse wasn't updated because some field was not correct " })
  update(@Param("id") id: string, @Body() updateClientsAddressDto: UpdateClientsAddressDto) {
    return this.clientsAddressesService.update(+id, updateClientsAddressDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "This endpoint is for deletion of a client addresse by id" })
  @ApiOkResponse({ description: "the client addresse was deleted successful" })
  remove(@Param("id") id: string) {
    return this.clientsAddressesService.remove(+id);
  }
}
