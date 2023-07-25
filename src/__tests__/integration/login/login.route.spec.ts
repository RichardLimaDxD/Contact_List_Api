import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import { User } from "../../../entities";
import loginRouteMock from "../../mocks/login/login.route.mock";
import supertest from "supertest";
import app from "../../../app";

describe("POST /login", () => {
  let connection: DataSource;

  const baseUrl: string = "/login";
  const userRepo = AppDataSource.getRepository(User);

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((error) => console.error(error));
  });

  beforeEach(async () => {
    const users: Array<User> = await userRepo.find();
    await userRepo.remove(users);
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("Success: Must be able to login", async () => {
    const user: User = userRepo.create(loginRouteMock.userLogin);
    await userRepo.save(user);

    const response = await supertest(app)
      .post(baseUrl)
      .send(loginRouteMock.userLogin);

    const expectResults = {
      status: 200,
      bodyEqual: { token: expect.any(String) },
    };

    expect(response.status).toBe(expectResults.status);
    expect(response.body).toStrictEqual(expectResults.bodyEqual);
  });

  it("Error: Must not be able to login - Invalid credential 1 - Wrong password", async () => {
    const user: User = userRepo.create(loginRouteMock.userLogin);
    await userRepo.save(user);

    const response = await supertest(app)
      .post(baseUrl)
      .send(loginRouteMock.userInvalidCredential1);

    const expectResults = {
      status: 401,
      bodyEqual: { message: "Invalid credentials" },
    };

    expect(response.status).toBe(expectResults.status);
    expect(response.body).toStrictEqual(expectResults.bodyEqual);
  });

  it("Error: Must not be able to login - Invalid credential 2 - Wrong email", async () => {
    const user: User = userRepo.create(loginRouteMock.userLogin);
    await userRepo.save(user);

    const response = await supertest(app)
      .post(baseUrl)
      .send(loginRouteMock.userInvalidCredential12);

    const expectResults = {
      status: 401,
      bodyEqual: { message: "Invalid credentials" },
    };

    expect(response.status).toBe(expectResults.status);
    expect(response.body).toStrictEqual(expectResults.bodyEqual);
  });
});
