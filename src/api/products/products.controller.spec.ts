import { Test, TestingModule } from "@nestjs/testing";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";
import { getModelToken } from "@nestjs/sequelize";
import { Product } from "./entities/product.entity";

describe("ProductsController", () => {
  let controller: ProductsController;
  const mockProductProvider = {};
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        ProductsService,
        {
          provide: getModelToken(Product),
          useValue: mockProductProvider
        }
      ]
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
