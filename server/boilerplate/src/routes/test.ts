import express from "express";

import {testController} from '../libs/controllers'

export default (dependencies: any) => {
  const router = express.Router();

  const { PostTestController } = testController(dependencies);

  router.post("/testing", PostTestController);


  return router;
};
