import { Test, TestingModule } from "@nestjs/testing";
import { ClientsController } from "./clients.controller";
import { ClientsService } from "./clients.service";
import { getModelToken } from "@nestjs/sequelize";
import { Client } from "./entities/client.entity";

describe("ClientsController", () => {
  let controller: ClientsController;
  const mockUserProvider = {};
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientsController],
      providers: [ClientsService, { provide: getModelToken(Client), useValue: mockUserProvider }]
    }).compile();

    controller = module.get<ClientsController>(ClientsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
