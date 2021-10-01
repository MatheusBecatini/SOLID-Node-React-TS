import { MailProvider } from "../../providers/MailProvider";
import { userRepository } from "../../repositories";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailProvider = new MailProvider();

const createUserUseCase = new CreateUserUseCase(userRepository, mailProvider);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
