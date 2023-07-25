import { Repository, DeepPartial } from "typeorm";
import { User } from "../../../entities";
import { AppDataSource } from "../../../data-source";

type IuserRepository = Repository<User>;
type IuserDeepPartial = DeepPartial<User>;

const readUsers = async (): Promise<Array<User>> => {
  const userRepo: IuserRepository = AppDataSource.getRepository(User);
  const usersTotal: number = 1;

  return await userRepo.save(
    Array.from(Array(usersTotal))
      .map((val, index): IuserDeepPartial => {
        const fullname: string = `fullname${index}`;
        const email: string = `${fullname}@mail.com`;
        return {
          id: expect.any(Number),
          fullname,
          email,
          telephone: "11111111111",
          password: "1234",
        };
      })
      .map(({ id, ...el }) => el)
  );
};

export default { readUsers };
