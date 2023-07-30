import { Repository } from "typeorm";
import { Contact } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error/error";

const deleteContactService = async (id: number) => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const dataId: Contact | null = await contactRepository.findOneBy({
    id: id,
  });

  if (!dataId) {
    throw new AppError("task not found", 404);
  }

  await contactRepository.remove(dataId);
};

export { deleteContactService };
