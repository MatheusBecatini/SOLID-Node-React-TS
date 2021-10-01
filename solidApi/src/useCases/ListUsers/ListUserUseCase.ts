import { IUserRepository } from "../../repositories/interfaces/IUserRepository";

export class ListUserUseCase {
  constructor(private repo: IUserRepository) {}

  async execute() {
    return this.repo.list();
  }
}
