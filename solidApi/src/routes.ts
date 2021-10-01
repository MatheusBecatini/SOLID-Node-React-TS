import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { listUserController } from "./useCases/ListUsers";

const router = Router();

router.post("/user", (request, response) => {
  return createUserController.handle(request, response);
});

router.get("/", (request, response) => {
  return listUserController.handle(request, response);
});

export { router };
