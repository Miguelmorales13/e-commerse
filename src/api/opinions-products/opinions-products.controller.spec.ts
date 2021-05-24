import { Test, TestingModule } from '@nestjs/testing';
import { OpinionsProductsController } from './opinions-products.controller';
import { OpinionsProductsService } from './opinions-products.service';

describe('OpinionsProductsController', () => {
  let controller: OpinionsProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpinionsProductsController],
      providers: [OpinionsProductsService],
    }).compile();

    controller = module.get<OpinionsProductsController>(OpinionsProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
