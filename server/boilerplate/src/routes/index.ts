import express from "express";
import testRoutes from "./test";

export const routes = (dependencies: any) => {
  const routes = express.Router();

  routes.use("/test", testRoutes(dependencies));


  return routes;
};
