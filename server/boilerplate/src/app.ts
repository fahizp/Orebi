import express from "express";
import { json } from "body-parser";
import { NotFoundError, errorHandler, } from "@ecom-microservie/common";
import depentencies from "./config/depentencies";
import { routes } from "./routes";

const app = express();

const router = express.Router();

app.set("trust proxy", true);
app.use(json());

app.use("/api", routes(depentencies));

app.all("*", async (req, res) => { throw new NotFoundError() });

app.use(errorHandler);

export { app };
