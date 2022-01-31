import { UserRepository } from "@user/application/user.repository";
import { UserModel } from "@user/domain/user.model";

export default class {
    constructor(private userRepository: UserRepository) {}
  
    list() {
      return this.userRepository.list();
    }
  
    getOne(email: string) {
      return this.userRepository.getOne(email);
    }
  
    insert(user: UserModel) {
      return this.userRepository.insert(user);
    }
  }