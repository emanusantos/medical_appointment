import { User } from "../entities/user.entity";

export class UserRepository {
  users: User[];

  private static instance: UserRepository;

  constructor() {
    this.users = [];
  }

  static getInstance() {
    if (!UserRepository.instance) {
      this.instance = new UserRepository();
    }

    return UserRepository.instance;
  }

  async findByUsername(username: string) {
    console.log(this.users);

    return this.users.find((user) => user.username === username);
  }

  async save(data: User) {
    this.users.push(data);
    return data;
  }
}
