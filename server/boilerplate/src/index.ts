import mongoose from "mongoose";
import { app } from "./app";
import { natsWrapper } from "./nats-wrapper";
import { connectDB } from "./config/db";
import dotenv from "dotenv";
dotenv.config();
const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }
  if (!process.env.MONGO_URL) {
    throw new Error("MONGO_URL must be defined");
  }
  if (!process.env.NATS_CLIENT_ID) {
    throw new Error("MONGO_URI must be defined");
  }

  try {
      // await natsWrapper.connect(
      //   "orbie",
      //   process.env.NATS_CLIENT_ID,
      //   "http://nats-srv:4222"
      // );

      // natsWrapper.client.on("close", () => {
      //   console.log("NATS connetion closed!");
      //   process.exit();
      // });

      // process.on("SIGINT", () => natsWrapper.client.close());
      // process.on("SIGTERM", () => natsWrapper.client.close());


    connectDB();
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000!!!!!!!!");
  });
};

start();
