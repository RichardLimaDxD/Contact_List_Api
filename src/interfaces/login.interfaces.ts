import { z } from "zod";
import { loginSchema } from "../schemas/login.schema";

type Tlogin = z.infer<typeof loginSchema>;

export { Tlogin };
