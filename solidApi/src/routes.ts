import { Router } from "express";

const router = Router();

router.post("/user", (request, response) => {
  return response.status(201).send();
});

router.get("/", (request, response) => {
  return response.send("Rodando...");
});

export { router };
