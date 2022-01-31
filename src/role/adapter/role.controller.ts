import { RoleUseCase } from "@role/application/role.usecase";
import { Request, Response } from "express";

export default class {
  constructor(private roleUseCase: RoleUseCase) {}

  list(request: Request, response: Response) {
    response.writeHead(200, { "content-type": "application/json" });
    response.write(JSON.stringify(this.roleUseCase.list()));
    response.end();
  }

  /*
    update(id: ID, entity: T): T {
    return entity;
  }
  delete(id: ID): T {
    return {} as T;
  }
  list(): T[] {
    return [] as T[];
  }
  getOne(id: ID): T {
    return {} as T;
  }
  insert(entity: T): T {
    return entity;
  }
  
  */
}
