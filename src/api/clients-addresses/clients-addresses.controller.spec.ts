import { Test, TestingModule } from '@nestjs/testing';
import { ClientsAddressesController } from './clients-addresses.controller';
import { ClientsAddressesService } from './clients-addresses.service';

describe('ClientsAddressesController', () => {
  let controller: ClientsAddressesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientsAddressesController],
      providers: [ClientsAddressesService],
    }).compile();

    controller = module.get<ClientsAddressesController>(ClientsAddressesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
