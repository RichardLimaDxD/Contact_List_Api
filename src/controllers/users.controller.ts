import { Request, Response } from "express";
import { createUserService } from "../services/users/createUser.service";
import {
  TuserPatch,
  TuserRequest,
  TuserResponse,
} from "../interfaces/user.interfaces";
import { readUserService } from "../services/users/readUser.service";
import { updateUserService } from "../services/users/updateUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";
import { retrieveUserService } from "../services/users/retrieveUser.service";

const createUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const data: TuserRequest = request.body;

  const newData: TuserResponse = await createUserService(data);

  return response.status(201).json(newData);
};

const readUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const id: number = parseInt(request.params.id);

  const data: TuserResponse = await readUserService(id);

  return response.status(200).json(data);
};

const retrieveUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const id: number = parseInt(response.locals.id);

  const newData = await retrieveUserService(id);

  return response.status(200).json(newData);
};

const updateUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const data: TuserPatch = request.body;

  const id: number = parseInt(request.params.id);

  const newData = await updateUserService(data, id);

  return response.status(200).json(newData);
};

const deleteUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const id: number = parseInt(request.params.id);

  await deleteUserService(id);

  return response.status(204).send();
};

export {
  createUserController,
  readUserController,
  retrieveUserController,
  updateUserController,
  deleteUserController,
};
