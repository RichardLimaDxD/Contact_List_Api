import express, { Application } from "express";
import { errorHandle } from "./error/error";
import "express-async-errors";
import "reflect-metadata";
import { usersRoute } from "./routes/users.route";

const app: Application = express();

app.use(express.json());

app.use("/users", usersRoute);

app.use(errorHandle);

export default app;
