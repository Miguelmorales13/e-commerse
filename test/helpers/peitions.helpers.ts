import * as supertest from "supertest";

export const getAnyTesting = async (app, token: string, type: string) => {
  try {
    const res = await supertest(app.getHttpServer())
      .get(type)
      .set("Authorization", `Bearer ${token}`);
    return res.body.data;
  } catch (e) {
    console.error(JSON.stringify(e.message));
  }
  return [];
};