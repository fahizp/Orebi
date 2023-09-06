import mongoose, { Model, Document } from "mongoose";

// Define the interface for your document
interface ITestDocument extends Document {
  test: string;
}

// Define the static method
interface ITestModel extends Model<ITestDocument> {
  build(data: { test: string }): ITestDocument;
}

const testSchema = new mongoose.Schema({
  test: {
    type: String,
    required: true,
  },
});

// Define the static method on the schema
testSchema.statics.build = (data: { test: string }) => new Test(data);

const Test = mongoose.model<ITestDocument, ITestModel>("Test", testSchema);

export { Test };
