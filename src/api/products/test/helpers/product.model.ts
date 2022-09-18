import {Product} from "../../entities/product.entity";
import {MockModel} from "../../../users/test/helpers/mock.model";
import {productStubEntity} from "./product.stub";


export class ProductModel extends MockModel<Product> {
    protected entityStub = productStubEntity();

}
