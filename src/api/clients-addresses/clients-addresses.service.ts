import { Inject, Injectable } from "@nestjs/common";
import { CreateClientsAddressDto } from "./dto/create-clients-address.dto";
import { UpdateClientsAddressDto } from "./dto/update-clients-address.dto";
import { SequelizeCrudService } from "../crud/sequelize-crud-service";
import { ClientsAddress } from "./entities/clients-address.entity";
import { getModelToken } from "@nestjs/sequelize";

@Injectable()
export class ClientsAddressesService extends SequelizeCrudService<ClientsAddress, CreateClientsAddressDto, UpdateClientsAddressDto> {
  constructor(@Inject(getModelToken(ClientsAddress)) private readonly clientsAddressProvider: typeof ClientsAddress) {
    super(clientsAddressProvider);
  }
}
