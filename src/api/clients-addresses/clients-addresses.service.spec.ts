import { Test, TestingModule } from "@nestjs/testing";
import { ClientsAddressesService } from "./clients-addresses.service";
import { getModelToken } from "@nestjs/sequelize";
import { ClientsAddress } from "./entities/clients-address.entity";

describe("ClientsAddressesService", () => {
  let service: ClientsAddressesService;
  const mockClientAddressProvider = {};
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientsAddressesService,
        { provide: getModelToken(ClientsAddress), useValue: mockClientAddressProvider }
      ]
    }).compile();

    service = module.get<ClientsAddressesService>(ClientsAddressesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
