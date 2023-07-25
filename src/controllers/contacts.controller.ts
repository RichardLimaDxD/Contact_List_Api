import { Request, Response } from "express";
import {
  TcontactPatch,
  TcontactRequest,
  TcontactResponse,
} from "../interfaces/contact.interfaces";
import { createContactService } from "../services/contacts/createContact.service";
import { readContactService } from "../services/contacts/readContact.service";
import { patchContactService } from "../services/contacts/patchContact.service";
import { deleteContactService } from "../services/contacts/deleteContact.service";

const createContactController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const data: TcontactRequest = request.body;

  const id: number = parseInt(response.locals.id);

  const newData: TcontactRequest = await createContactService(data, id);

  return response.status(201).json(newData);
};

const readContactController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId: number = parseInt(response.locals.id);

  const data: TcontactResponse = await readContactService(userId);

  return response.status(200).json(data);
};

const patchContactController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const data: TcontactPatch = request.body;
  const id: number = parseInt(request.params.id);

  const newData: TcontactPatch = await patchContactService(data, id);

  return response.status(200).json(newData);
};

const deleteContactController = async (
  request: Request,
  response: Response
): Promise<void> => {
  const id: number = parseInt(request.params.id);

  await deleteContactService(id);

  response.status(204).send();
};

export {
  deleteContactController,
  patchContactController,
  readContactController,
  createContactController,
};
