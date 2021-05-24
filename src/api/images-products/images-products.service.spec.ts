import { Test, TestingModule } from '@nestjs/testing';
import { ImagesProductsService } from './images-products.service';

describe('ImagesProductsService', () => {
  let service: ImagesProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImagesProductsService],
    }).compile();

    service = module.get<ImagesProductsService>(ImagesProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
