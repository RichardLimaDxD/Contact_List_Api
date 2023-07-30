import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../error/error";
import { TuserResponse } from "../../interfaces/user.interfaces";
import { userResponseSchema } from "../../schemas/user.schema";

const retrieveUserService = async (id: number): Promise<TuserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: id,
    },
  });

  if (!user) {
    throw new AppError("User not found!", 403);
  }

  const parse: TuserResponse = userResponseSchema.parse(user);

  return parse;
};

export { retrieveUserService };
