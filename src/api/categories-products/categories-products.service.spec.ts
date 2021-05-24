import { Test, TestingModule } from "@nestjs/testing";
import { CategoriesProductsService } from "./categories-products.service";
import { getModelToken } from "@nestjs/sequelize";
import { CategoriesProduct } from "./entities/categories-product.entity";

describe("CategoriesProductsService", () => {
  let service: CategoriesProductsService;
  const mockCateogiresProductProvider = {};
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesProductsService,
        {
          provide: getModelToken(CategoriesProduct),
          useValue: mockCateogiresProductProvider
        }
      ]
    }).compile();

    service = module.get<CategoriesProductsService>(CategoriesProductsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
