import express, { Application } from "express";
import { errorHandle } from "./error/error";
import "express-async-errors";
import "reflect-metadata";

const app: Application = express();

app.use(express.json());

app.use(errorHandle);

export default app;
