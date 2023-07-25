import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { TuserRequest, TuserResponse } from "../../interfaces/user.interfaces";
import { userResponseSchema } from "../../schemas/user.schema";

const createUserService = async (
  data: TuserRequest
): Promise<TuserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User = userRepository.create(data);

  await userRepository.save(user);

  const parse: TuserResponse = userResponseSchema.parse(user);

  return parse;
};

export { createUserService };
