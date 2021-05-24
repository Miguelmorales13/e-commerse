import { Module } from "@nestjs/common";
import { ClientsAddressesService } from "./clients-addresses.service";
import { ClientsAddressesController } from "./clients-addresses.controller";
import { ClientsAddressProvider } from "./clients-address.provider";

@Module({
  controllers: [ClientsAddressesController],
  providers: [ClientsAddressesService, ...ClientsAddressProvider]
})
export class ClientsAddressesModule {
}
