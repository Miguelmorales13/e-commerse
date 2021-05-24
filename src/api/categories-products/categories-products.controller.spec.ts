import { Test, TestingModule } from "@nestjs/testing";
import { CategoriesProductsController } from "./categories-products.controller";
import { CategoriesProductsService } from "./categories-products.service";
import { getModelToken } from "@nestjs/sequelize";
import { CategoriesProduct } from "./entities/categories-product.entity";

describe("CategoriesProductsController", () => {
  let controller: CategoriesProductsController;
  const mockCategoriesProductProvider = {};
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesProductsController],
      providers: [
        CategoriesProductsService,
        {
          provide: getModelToken(CategoriesProduct),
          useValue: mockCategoriesProductProvider
        }
      ]
    }).compile();

    controller = module.get<CategoriesProductsController>(CategoriesProductsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
