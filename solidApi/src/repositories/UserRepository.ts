import { User } from "../entities/User";
import { IUserRepository } from "./interfaces/IUserRepository";

export class UserRepository implements IUserRepository {
  private users: User[] = [
    new User(
      { name: "Antigo", email: "antigo@email.com", password: "11111" },
      "123"
    ),
  ];

  async findByEmail(email: string) {
    return this.users.find((user) => user.email === email);
  }

  async save(user: User) {
    this.users.push(user);
  }

  async list() {
    return this.users;
  }
}
