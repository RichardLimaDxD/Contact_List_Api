import { Repository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Contact, User } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../error/error";
import "dotenv/config";

const emailExistsMIddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { email }: { email: string } = request.body;
  if (email === undefined) return next();

  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepo.findOne({
    where: {
      email: email,
    },
  });

  if (user && user.email !== undefined) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};

const telephoneExistsMIddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { telephone }: { telephone: string } = request.body;
  if (telephone === undefined) return next();

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    telephone: telephone,
  });

  if (user && user.telephone !== undefined) {
    throw new AppError("Telephone already exists", 409);
  }

  return next();
};

const verifyUserMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> => {
  const id: number = parseInt(response.locals.id);
  const idParams: number = parseInt(request.params.id);

  if (id === idParams) {
    return next();
  }
  throw new AppError("Insufficient permission", 403);
};

const idExistsMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void | Response> => {
  const id: number = parseInt(request.params.id);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: id,
    },
  });

  if (user && user.id === undefined) {
    throw new AppError("User not found", 404);
  }

  return next();
};

const fullnameExistsMIddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { fullname }: { fullname: string } = request.body;
  if (fullname === undefined) return next();

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    fullname: fullname,
  });

  if (user && user.fullname !== undefined) {
    throw new AppError("This name already exists", 409);
  }

  return next();
};

const checkContactUserMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contactId: number = parseInt(request.params.id);
  const userId: number = parseInt(response.locals.id);

  const contact: Contact | null = await contactRepository.findOne({
    where: {
      id: contactId,
    },
    relations: {
      user: true,
    },
  });

  if (!contact) {
    throw new AppError("Contact not found!", 404);
  }

  if (contact?.user.id !== userId) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

export {
  emailExistsMIddleware,
  telephoneExistsMIddleware,
  fullnameExistsMIddleware,
  verifyUserMiddleware,
  idExistsMiddleware,
  checkContactUserMiddleware,
};
