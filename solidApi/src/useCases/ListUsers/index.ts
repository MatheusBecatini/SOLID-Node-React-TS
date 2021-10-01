import { userRepository } from "../../repositories";
import { ListUserController } from "./ListUserController";
import { ListUserUseCase } from "./ListUserUseCase";

const listUserUseCase = new ListUserUseCase(userRepository);

const listUserController = new ListUserController(listUserUseCase);

export { listUserController };
