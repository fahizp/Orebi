import mongoose from "mongoose";
import { schemas } from "../../database/mongo";

const { Test } = schemas;
export default {
  test: async (test: any) => {
    const mongooseObject = Test.build({ test });

    return await mongooseObject.save();
  },
};
