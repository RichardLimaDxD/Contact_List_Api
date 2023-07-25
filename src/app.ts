import express, { Application } from "express";
import "reflect-metadata";
import "express-async-errors";
import { errorHandle } from "./error/error";
import { usersRoute } from "./routes/users.route";
import { loginRoute } from "./routes/login.route";
import { contactRoutes } from "./routes/contacts.route";

const app: Application = express();

app.use(express.json());

app.use("/users", usersRoute);

app.use("/login", loginRoute);

app.use("/contacts", contactRoutes);

app.use(errorHandle);

export default app;
