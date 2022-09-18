import {Test, TestingModule} from "@nestjs/testing";
import {ProductsController} from "../products.controller";
import {ProductProvider} from "../product.provider";
import {productStubCreateDto, productStubEntity, productStubUpdateDto} from "./helpers/product.stub";
import {ProductsService} from "../products.service";

jest.mock("../products.service")

describe("ProductsController", () => {
    let controller: ProductsController;
    let service: ProductsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ProductsController],
            providers: [ProductsService, ...ProductProvider]
        }).compile();

        controller = module.get<ProductsController>(ProductsController);
        service = module.get<ProductsService>(ProductsService);
        jest.clearAllMocks()
    });
    it('productsService should be defined', () => {
        expect(service).toBeDefined();
    });
    it('productsController should be defined', () => {
        expect(controller).toBeDefined();
    });
    describe("getOne", () => {
        describe("when getOne is called", () => {
            let product;
            beforeEach(async () => {
                product = await controller.findOne(String(productStubEntity().id))
            })

            test("when it should call productService", () => {
                expect(service.findOne).toBeCalledWith(productStubEntity().id)
            })
            test("when it should return a product", () => {
                expect(product).toEqual(productStubEntity())
            })
        })
    })
    describe("getAll", () => {
        describe("when getAll is called", () => {
            let products;
            beforeEach(async () => {
                products = await controller.findAll()
            })

            test("when it should call productService", () => {
                expect(service.findAll).toHaveBeenCalled()
            })
            test("when it should return  products", () => {
                expect(products).toEqual([productStubEntity()])
            })
        })
    })

    describe("create", () => {
        describe("when create is called", () => {
            let product;

            beforeEach(async () => {
                product = await controller.create(productStubCreateDto(), {filename: "hone.jpg"} as Express.Multer.File)
            })

            test("when it should call productService", () => {
                expect(service.create).toHaveBeenCalledWith({...productStubCreateDto(), mainImage: "hone.jpg"})
            })
            test("when it should call productService", () => {
                expect(product).toEqual(productStubEntity())
            })
        })
    })
    describe("update", () => {
        describe("when update is called", () => {
            let product;

            beforeEach(async () => {
                product = await controller.update(String(productStubUpdateDto().id), productStubUpdateDto(), {filename: "hone.jpg"} as Express.Multer.File)
            })

            test("when it should call productService", () => {
                expect(service.update).toHaveBeenCalledWith(productStubEntity().id, {...productStubUpdateDto(), mainImage: "hone.jpg"})
            })
            test("when it should call productService", () => {
                expect(product).toEqual(productStubEntity())
            })
        })
    })
    describe("remove", () => {
        describe("when remove is called", () => {
            let product;
            beforeEach(async () => {
                product = await controller.remove(String(productStubEntity().id))
            })

            test("when it should call productService", () => {
                expect(service.remove).toHaveBeenCalledWith(productStubEntity().id)
            })
            test("when it should call productService", () => {
                expect(product).toEqual(1)
            })
        })
    })


});
