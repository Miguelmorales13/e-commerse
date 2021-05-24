import { Client } from "./entities/client.entity";
import { getModelToken } from "@nestjs/sequelize";

export const ClientProvider = [
  {
    provide: getModelToken(Client),
    useValue: Client
  }
];