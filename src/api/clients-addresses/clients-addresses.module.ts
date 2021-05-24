import { Module } from '@nestjs/common';
import { ClientsAddressesService } from './clients-addresses.service';
import { ClientsAddressesController } from './clients-addresses.controller';

@Module({
  controllers: [ClientsAddressesController],
  providers: [ClientsAddressesService]
})
export class ClientsAddressesModule {}
