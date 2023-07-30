import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import { User } from "../../../entities";
import { deleteUserRouteMock, errorsMock, tokenMock } from "../../mocks";
import supertest from "supertest";
import app from "../../../app";

describe("DELETE /users", () => {
  let connection: DataSource;

  const userRepo = AppDataSource.getRepository(User);

  const baseUrl: string = "/users";
  const destroyInvalidIDUrl: string = baseUrl + "/123456";

  let communUser: User;

  let destroyUserUrl: string;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((error) => console.error(error));
  });

  beforeEach(async () => {
    const users: User[] = await userRepo.find();
    await userRepo.remove(users);

    communUser = await userRepo.save(deleteUserRouteMock.userComplete);

    destroyUserUrl = baseUrl + `/${communUser.id}`;
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("Error: Must not be able to destroy - Missing bearer", async () => {
    const response = await supertest(app).delete(destroyUserUrl);

    expect(response.status).toBe(errorsMock.missingBearer.status);
    expect(response.body).toStrictEqual(errorsMock.missingBearer.error);
  });

  it("Error: Must not be able to destroy - Invalid signature", async () => {
    const response = await supertest(app)
      .delete(destroyUserUrl)
      .set("Authorization", `Bearer ${tokenMock.invalidSignature}`);

    expect(response.status).toBe(errorsMock.invalidSignature.status);
    expect(response.body).toStrictEqual(errorsMock.invalidSignature.error);
  });

  it("Error: Must not be able to destroy - JWT malformed", async () => {
    const response = await supertest(app)
      .delete(destroyUserUrl)
      .set("Authorization", `Bearer ${tokenMock.jwtMalformed}`);

    expect(response.status).toBe(errorsMock.jwtMalformed.status);
    expect(response.body).toStrictEqual(errorsMock.jwtMalformed.error);
  });
});
