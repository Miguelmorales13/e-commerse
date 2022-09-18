import {Product} from "../../entities/product.entity";
import {CreateProductDto} from "../../dto/create-product.dto";
import {UpdateProductDto} from "../../dto/update-product.dto";

export const productStubCreateDto = (): CreateProductDto => {
    return {
        name: "Product one",
        price: 1,
        priceDiscount: 1,
        description: "This is a product example",
        brand: "none",
        isInDiscount: false,
        active: true,
        categoryId: 1,
    }
}

export const productStubUpdateDto = (): UpdateProductDto => {
    return {
        id: 1,
        ...productStubCreateDto()
    }
}

export const productStubEntity = (): Product => {
    return {
        hasMultiplesImages: false,
        mainImage: "for/image.png",
        images: [],
        category: {
            name: "none",
            id: 1,
            nivel: 1,
        },
        ...productStubUpdateDto() as any

    } as Product
}

