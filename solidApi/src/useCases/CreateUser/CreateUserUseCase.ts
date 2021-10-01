import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/interfaces/IMailProvider";
import { IUserRepository } from "../../repositories/interfaces/IUserRepository";
import { CreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(
    private repo: IUserRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute(data: CreateUserDTO) {
    const userExists = await this.repo.findByEmail(data.email);

    if (userExists) {
      throw new Error("User already exists");
    }

    const user = new User(data);

    await this.repo.save(user);

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      subject: "Email enviado",
      body: "Você acabou de ser cadastrado no nosso sistema!",
    });
  }
}
