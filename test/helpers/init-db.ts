import { User } from "../../src/api/users/entities/user.entity";
import { Sequelize } from "sequelize-typescript";
import { GetEnv } from "../../src/configs/env.validations";
import { Client } from "../../src/api/clients/entities/client.entity";

export const initDBTesting = async () => {
  const sequelize = new Sequelize({
    dialect: GetEnv("SEQUELIZE_DIALECT"),
    host: GetEnv("SEQUELIZE_HOST"),
    port: GetEnv("SEQUELIZE_PORT"),
    username: GetEnv("SEQUELIZE_USERNAME"),
    password: GetEnv("SEQUELIZE_PASSWORD"),
    database: GetEnv("SEQUELIZE_DATABASE"),
    logging: false
  });
  sequelize.addModels([User, Client]);
  await sequelize.sync({ logging: false });
  return sequelize;
};
