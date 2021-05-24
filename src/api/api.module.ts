import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { ClientsModule } from "./clients/clients.module";
import { ClientsAddressesModule } from "./clients-addresses/clients-addresses.module";
import { CategoriesProductsModule } from "./categories-products/categories-products.module";
import { ProductsModule } from "./products/products.module";
import { ImagesProductsModule } from "./images-products/images-products.module";

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ClientsModule,
    ClientsAddressesModule,
    CategoriesProductsModule,
    ProductsModule,
    ImagesProductsModule
    // OpinionsProductsModule,
    // OrdersModule
  ]
})
export class ApiModule {
}
