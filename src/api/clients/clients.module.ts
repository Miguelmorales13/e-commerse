import { Module } from "@nestjs/common";
import { ClientsService } from "./clients.service";
import { ClientsController } from "./clients.controller";
import { ClientProvider } from "./client.provider";

@Module({
  controllers: [ClientsController],
  providers: [ClientsService, ...ClientProvider]
})
export class ClientsModule {
}
