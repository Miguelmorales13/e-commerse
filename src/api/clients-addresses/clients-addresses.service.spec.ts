import { Test, TestingModule } from '@nestjs/testing';
import { ClientsAddressesService } from './clients-addresses.service';

describe('ClientsAddressesService', () => {
  let service: ClientsAddressesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientsAddressesService],
    }).compile();

    service = module.get<ClientsAddressesService>(ClientsAddressesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
