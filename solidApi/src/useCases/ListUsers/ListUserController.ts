import { Request, Response } from "express";
import { ListUserUseCase } from "./ListUserUseCase";

export class ListUserController {
  constructor(private listUserUseCase: ListUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const users = await this.listUserUseCase.execute();

      return response.status(200).json(users);
    } catch (err) {
      return response
        .status(500)
        .json({ message: err.message || "Unexpected error" });
    }
  }
}
