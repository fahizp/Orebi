import PostTestController from "./test.controller"

export default (dependencies: any) => {
    return {
      PostTestController: PostTestController(dependencies),
    };
  };