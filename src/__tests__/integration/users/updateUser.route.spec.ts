import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import { User } from "../../../entities";
import { errorsMock, tokenMock, updateUserRouteMock } from "../../mocks";
import supertest from "supertest";
import app from "../../../app";

describe("PATCH /users", () => {
  let connection: DataSource;

  let updateUserUrl: string;
  const baseUrl: string = "/users";
  const updateInvalidIDUrl: string = baseUrl + "/123456";

  const userRepo = AppDataSource.getRepository(User);
  let communUser: User;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((error) => console.error(error));
  });

  beforeEach(async () => {
    const users: User[] = await userRepo.find();
    await userRepo.remove(users);

    communUser = await userRepo.save(updateUserRouteMock.userComplete);

    updateUserUrl = baseUrl + `/${communUser.id}`;
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("Success: User must be able to self update - User token - Partial", async () => {
    const response = await supertest(app)
      .patch(updateUserUrl)
      .set("Authorization", `Bearer ${tokenMock.genToken(communUser.id)}`)
      .send(updateUserRouteMock.userPartial);

    const expectResults = {
      status: 200,
    };

    const { password, ...payload } = communUser;

    expect(response.status).toBe(expectResults.status);
    expect(response.body).toEqual(expect.objectContaining(payload));
    expect(response.body).not.toEqual(
      expect.objectContaining({ password: expect.any(String) })
    );
  });
});
