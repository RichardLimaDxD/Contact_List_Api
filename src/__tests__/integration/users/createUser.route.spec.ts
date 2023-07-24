import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import { before } from "node:test";
import { error } from "node:console";

describe("POST /users", () => {
  let connection: DataSource;

  const baseUrl: string = "/users";
  const userRepo = AppDataSource.getRepository();

  before(async () => {
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
});
