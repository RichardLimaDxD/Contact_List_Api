import { Request, Response } from "express";

const createUserController = async (
  request: Request,
  response: Response
): Promise<Response | void> => {};

const readUserController = async (
  request: Request,
  response: Response
): Promise<Response | void> => {};

const updateUserController = async (
  request: Request,
  response: Response
): Promise<Response | void> => {};

const deleteUserController = async (
  request: Request,
  response: Response
): Promise<void> => {};

export {
  createUserController,
  readUserController,
  updateUserController,
  deleteUserController,
};
