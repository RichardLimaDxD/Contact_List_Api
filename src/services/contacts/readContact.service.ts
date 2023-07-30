import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact, User } from "../../entities";
import { TcontactResponse } from "../../interfaces/contact.interfaces";
import { AppError } from "../../error/error";

const readContactService = async (
  userId: number
): Promise<TcontactResponse> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("user not found", 404);
  }

  const contact: Contact[] = await contactRepository.find({
    where: {
      user: {
        id: user.id,
      },
    },
  });

  return contact;
};

export { readContactService };
