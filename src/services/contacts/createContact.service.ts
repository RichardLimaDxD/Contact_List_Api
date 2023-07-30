import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TcontactRequest } from "../../interfaces/contact.interfaces";
import { Contact, User } from "../../entities";
import { AppError } from "../../error/error";
import { contactSchemaRequest } from "../../schemas/contact.schema";

const createContactService = async (
  data: TcontactRequest,
  id: number
): Promise<TcontactRequest> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: id,
    },
  });

  if (!user) {
    throw new AppError("user not found", 404);
  }

  const contact: Contact = contactRepository.create({
    ...data,
    user,
  });

  await contactRepository.save(contact);

  const parse: TcontactRequest = contactSchemaRequest.parse(contact);

  return parse;
};

export { createContactService };
