import { Test, TestingModule } from "@nestjs/testing";
import { ClientsAddressesController } from "./clients-addresses.controller";
import { ClientsAddressesService } from "./clients-addresses.service";
import { getModelToken } from "@nestjs/sequelize";
import { ClientsAddress } from "./entities/clients-address.entity";

describe("ClientsAddressesController", () => {
  let controller: ClientsAddressesController;
  const mockCLientAddressProvider = {};
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientsAddressesController],
      providers: [
        ClientsAddressesService,
        { provide: getModelToken(ClientsAddress), useValue: mockCLientAddressProvider }
      ]
    }).compile();

    controller = module.get<ClientsAddressesController>(ClientsAddressesController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
