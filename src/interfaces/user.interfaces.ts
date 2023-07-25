import z from "zod";
import {
  userArraySchema,
  userRequestSchema,
  userResponseSchema,
  userSchema,
} from "../schemas/user.schema";
import { DeepPartial } from "typeorm";

type Tuser = z.infer<typeof userSchema>;

type TuserRequest = z.infer<typeof userRequestSchema>;

type TuserResponse = z.infer<typeof userResponseSchema>;

type TuserArray = z.infer<typeof userArraySchema>;

type TuserPatch = DeepPartial<TuserRequest>;

export { TuserPatch, Tuser, TuserRequest, TuserResponse, TuserArray };
