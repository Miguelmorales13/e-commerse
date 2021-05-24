import { HttpStatus, INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { User } from "../src/api/users/entities/user.entity";
import { initServerTesting } from "./helpers/init-server";
import { initDBTesting } from "./helpers/init-db";
import { Sequelize } from "sequelize-typescript";
import { Op } from "sequelize";
import { signInTesting } from "./helpers/auth.helpers";
import { firstUser, initialUsers, secondUser } from "./helpers/users.helpers";
import { getAnyTesting } from "./helpers/peitions.helpers";

const validationsUser = (validation: any, toValidate: any) => {
  expect(validation.id).not.toBeNull();
  expect(validation.name).toEqual(toValidate.name);
  expect(validation.lastName).toEqual(toValidate.lastName);
  expect(validation.secondLastName).toEqual(toValidate.secondLastName);
  expect(validation.password).not.toBeDefined();
  expect(validation.email).toEqual(toValidate.email);
};
describe("USERS (e2e)", () => {
  let app: INestApplication;
  let db: Sequelize;
  let token: string;
  beforeEach(async () => {
    app = await initServerTesting();
    db = await initDBTesting();
    const usersRepository = db.getRepository(User);
    await usersRepository.destroy({ where: { id: { [Op.not]: null } } });
    await usersRepository.create(firstUser);
    await usersRepository.create(secondUser);
    token = await signInTesting(app, firstUser.email, firstUser.password);
  });


  it("/users (POST)", async () => {
    const user = {
      name: "miguel",
      lastName: "morales",
      secondLastName: "reyes",
      password: "admin123",
      email: "cacahuatisimo13+2@gmail.com"
    };
    const response = await request(app.getHttpServer())
      .post("/users")
      .set("Authorization", `Bearer ${token}`)
      .send(user)
      .expect(HttpStatus.CREATED);
    expect(response.body).not.toBeNull();
    expect(response.body.data).not.toBeNull();
    const userValidation = response.body.data;
    validationsUser(userValidation, user);
    const users = await getAnyTesting(app, token, "/users");
    expect(users).toHaveLength(initialUsers.length + 1);
  });
  it("/users (POST) when the user already exist", async () => {
    return request(app.getHttpServer())
      .post("/users")
      .set("Authorization", `Bearer ${token}`)
      .send({ ...firstUser })
      .expect(HttpStatus.CONFLICT);
  });
  it("/users (POST) when the any property is in existen in request body", async () => {
    return request(app.getHttpServer())
      .post("/users")
      .set("Authorization", `Bearer ${token}`)
      .send({ name: "dfdsfsdf" })
      .expect(HttpStatus.BAD_REQUEST)
      .expect((res => {
        console.log(res.body);
      }));
  });
  it("/users (GET)", async () => {
    const users: User[] = await getAnyTesting(app, token, "/users");
    const hasPassword = users.find(user => user.password);
    return request(app.getHttpServer())
      .get("/users")
      .set("Authorization", `Bearer ${token}`)
      .expect(HttpStatus.OK)
      .expect((response) => {
        expect(response.body).not.toBeNull();
        expect(response.body.data).toHaveLength(users.length);
        expect(hasPassword).not.toBeDefined();
      });
  });
  it("/users/:id (GET)", async () => {
    const users = await getAnyTesting(app, token, "/users");
    const [user] = users;
    return request(app.getHttpServer())
      .get(`/users/${user.id}`)
      .set("Authorization", `Bearer ${token}`)
      .expect(HttpStatus.OK)
      .expect((response) => {
        expect(response.body).not.toBeNull();
        const userValidation = response.body.data;
        validationsUser(userValidation, firstUser);
      });
  });
  it("/users/:id (PATCH)", async () => {
    const users = await getAnyTesting(app, token, "/users");
    const [user] = users;
    const userModified = { ...firstUser, id: user.id, name: "paranganito" };
    return request(app.getHttpServer())
      .patch(`/users/${user.id}`)
      .set("Authorization", `Bearer ${token}`)
      .send(userModified)
      .expect(HttpStatus.OK)
      .expect((response) => {
        expect(response.body).not.toBeNull();
        const userValidation = response.body.data;
        validationsUser(userValidation, userModified);
      });
  });
  it("/users/:id (DELETE)", async () => {
    const oldUsers = await getAnyTesting(app, token, "/users");
    const [_, user] = oldUsers;
    const response = await request(app.getHttpServer())
      .delete(`/users/${user.id}`)
      .set("Authorization", `Bearer ${token}`)
      .expect(HttpStatus.OK);
    expect(response.body).toEqual({ data: 1, message: expect.any(String) });
    const users = await getAnyTesting(app, token, "/users");
    expect(users).toHaveLength(initialUsers.length - 1);
  });
  afterEach(async () => {
    db.close();
    await app.close();
  });
});
