import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientsAddressesService } from './clients-addresses.service';
import { CreateClientsAddressDto } from './dto/create-clients-address.dto';
import { UpdateClientsAddressDto } from './dto/update-clients-address.dto';

@Controller('clients-addresses')
export class ClientsAddressesController {
  constructor(private readonly clientsAddressesService: ClientsAddressesService) {}

  @Post()
  create(@Body() createClientsAddressDto: CreateClientsAddressDto) {
    return this.clientsAddressesService.create(createClientsAddressDto);
  }

  @Get()
  findAll() {
    return this.clientsAddressesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientsAddressesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientsAddressDto: UpdateClientsAddressDto) {
    return this.clientsAddressesService.update(+id, updateClientsAddressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientsAddressesService.remove(+id);
  }
}
