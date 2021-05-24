import * as supertest from "supertest";

export const signInTesting = async (app, user: string, password: string) => {
  try {
    const res = await supertest(app.getHttpServer()).post("/auth/sign-in").send({
      user,
      password
    });
    return res.body.data.token;
  } catch (e) {
    console.error(JSON.stringify(e.message));
  }
  return null;
};