import { Sequelize } from "sequelize-typescript";
import { User } from "../../api/users/entities/user.entity";
import { GetEnv } from "../../configs/env.validations";
import { Client } from "../../api/clients/entities/client.entity";
import { Product } from "../../api/products/entities/product.entity";
import { CategoriesProduct } from "../../api/categories-products/entities/categories-product.entity";
import { ImagesProduct } from "../../api/images-products/entities/images-product.entity";
import { ClientsAddress } from "../../api/clients-addresses/entities/clients-address.entity";

export const sequelizeMysqlProvider = [
  {
    provide: "SEQUELIZE",
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: GetEnv("SEQUELIZE_DIALECT"),
        host: GetEnv("SEQUELIZE_HOST"),
        port: GetEnv("SEQUELIZE_PORT"),
        username: GetEnv("SEQUELIZE_USERNAME"),
        password: GetEnv("SEQUELIZE_PASSWORD"),
        database: GetEnv("SEQUELIZE_DATABASE")
      });
      sequelize.addModels([User, Client, CategoriesProduct, Product, ImagesProduct, ClientsAddress]);
      await sequelize.sync({ logging: true, alter: true });
      return sequelize;
    }

  }
];
