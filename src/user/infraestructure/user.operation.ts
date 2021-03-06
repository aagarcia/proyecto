import { UserRepository } from "@user/application/user.repository";
import { UserModel } from '@user/domain/user.model';

const users: UserModel[] = [
  { name: "Juan", lastname: "Perez", email: "a@a.com", password: "123", refreshToken: "123", roles: [], active: true, createdAt: new Date(), updatedAt: new Date() },
  { name: "Pedro", lastname: "Perez", email: "b@b.com", password: "123", refreshToken: "123", roles: [], active: true, createdAt: new Date(), updatedAt: new Date() },
  { name: "Maria", lastname: "Perez", email: "c@c.com", password: "123", refreshToken: "123", roles: [], active: true, createdAt: new Date(), updatedAt: new Date() },
];

export default class implements UserRepository {
  list(): UserModel[] {
    return users;
  }
  getOne(email: string): UserModel {
    const user = users.find((el) => el.email === email);
    if (user) {
      return user;
    }
    return {} as UserModel;
  }
  insert(user: UserModel): UserModel {
    users.push(user);
    return user;
  }
}
