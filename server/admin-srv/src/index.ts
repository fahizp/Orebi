import mongoose from "mongoose";
import { app } from "./app";
import { connectDB } from "./config/db";

const start = async () => {
  try {
    connectDB();
  } catch (error) {
    console.error(error);
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000!!!!!!!!");
  });
};
