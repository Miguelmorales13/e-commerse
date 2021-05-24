import { Test, TestingModule } from "@nestjs/testing";
import { ClientsService } from "./clients.service";
import { getModelToken } from "@nestjs/sequelize";
import { Client } from "./entities/client.entity";

describe("ClientsService", () => {
  let service: ClientsService;
  const mockCLientProvider = {};
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientsService,
        {
          provide: getModelToken(Client),
          useValue: mockCLientProvider
        }
      ]
    }).compile();

    service = module.get<ClientsService>(ClientsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
