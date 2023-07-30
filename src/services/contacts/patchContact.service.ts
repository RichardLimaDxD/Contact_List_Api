import { Repository } from "typeorm";
import { TcontactPatch } from "../../interfaces/contact.interfaces";
import { Contact } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error/error";
import { contactSchema } from "../../schemas/contact.schema";

const patchContactService = async (
  data: TcontactPatch,
  id: number
): Promise<TcontactPatch> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const oldList: Contact | null = await contactRepository.findOneBy({ id: id });

  if (!oldList) {
    throw new AppError("Contact not found", 404);
  }

  const newData: Contact = contactRepository.create({
    ...oldList,
    ...data,
  });

  await contactRepository.save(newData);

  const parse: TcontactPatch = contactSchema.parse(newData);

  return parse;
};

export { patchContactService };
