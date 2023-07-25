import { Repository } from "typeorm";
import { User } from "../../entities";
import { TuserPatch, TuserResponse } from "../../interfaces/user.interfaces";
import { AppDataSource } from "../../data-source";
import { userResponseSchema } from "../../schemas/user.schema";

const updateUserService = async (
  data: TuserPatch,
  id: number
): Promise<TuserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldData: User | null = await userRepository.findOneBy({
    id: id,
  });

  const { ...userDataId } = data;

  const user: User = userRepository.create({
    ...oldData,
    ...userDataId,
  });

  await userRepository.save(user);

  const parse: TuserResponse = userResponseSchema.parse(user);

  return parse;
};

export { updateUserService };
