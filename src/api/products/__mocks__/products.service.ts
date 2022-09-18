import {productStubEntity} from "../test/helpers/product.stub";

export const ProductsService = jest.fn().mockReturnValue(
    {
        findAll: jest.fn().mockResolvedValue([productStubEntity()]),
        findOne: jest.fn().mockResolvedValue(productStubEntity()),
        create: jest.fn().mockResolvedValue(productStubEntity()),
        update: jest.fn().mockReturnValue(productStubEntity()),
        remove: jest.fn().mockReturnValue(1),
    }
)
