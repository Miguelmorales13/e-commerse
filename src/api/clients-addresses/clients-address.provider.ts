import { ClientsAddress } from "./entities/clients-address.entity";
import { getModelToken } from "@nestjs/sequelize";

export const ClientsAddressProvider = [
  {
    provide: getModelToken(ClientsAddress),
    useValue: ClientsAddress
  }
];