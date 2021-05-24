import { Test, TestingModule } from '@nestjs/testing';
import { ImagesProductsController } from './images-products.controller';
import { ImagesProductsService } from './images-products.service';

describe('ImagesProductsController', () => {
  let controller: ImagesProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImagesProductsController],
      providers: [ImagesProductsService],
    }).compile();

    controller = module.get<ImagesProductsController>(ImagesProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
