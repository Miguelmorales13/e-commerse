import { Test, TestingModule } from "@nestjs/testing";
import { ProductsService } from "./products.service";
import { getModelToken } from "@nestjs/sequelize";
import { Product } from "./entities/product.entity";

describe("ProductsService", () => {
  let service: ProductsService;
  const mockProductProvider = {};
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService, {
        provide: getModelToken(Product),
        useValue: mockProductProvider
      }]
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
