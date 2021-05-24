import { Test, TestingModule } from '@nestjs/testing';
import { OpinionsProductsService } from './opinions-products.service';

describe('OpinionsProductsService', () => {
  let service: OpinionsProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpinionsProductsService],
    }).compile();

    service = module.get<OpinionsProductsService>(OpinionsProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
