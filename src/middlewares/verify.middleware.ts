import { Repository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
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

export { emailExistsMIddleware, telephoneExistsMIddleware };
