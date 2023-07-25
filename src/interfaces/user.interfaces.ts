import z from "zod";
import {
  userArraySchema,
  userRequestSchema,
  userResponseSchema,
  userSchema,
} from "../schemas/user.schema";

type Tuser = z.infer<typeof userSchema>;

type TuserRequest = z.infer<typeof userRequestSchema>;

type TuserResponse = z.infer<typeof userResponseSchema>;

type TuserArray = z.infer<typeof userArraySchema>;

export { Tuser, TuserRequest, TuserResponse, TuserArray };
