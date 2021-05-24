import { Inject, Injectable } from "@nestjs/common";
import { CreateClientDto } from "./dto/create-client.dto";
import { UpdateClientDto } from "./dto/update-client.dto";
import { SequelizeCrudService } from "../crud/sequelize-crud-service";
import { Client } from "./entities/client.entity";
import { getModelToken } from "@nestjs/sequelize";

@Injectable()
export class ClientsService extends SequelizeCrudService<Client, CreateClientDto, UpdateClientDto> {
  constructor(@Inject(getModelToken(Client)) private readonly clientProvider: typeof Client) {
    super(clientProvider);
  }

}
