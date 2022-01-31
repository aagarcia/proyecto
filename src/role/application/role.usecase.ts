import { RoleModel } from "@role/domain/role.model";
import { BaseUseCase } from "@shared/application/base.usecase";
import { RoleRepository } from "@role/application/role.repository";

export class RoleUseCase extends BaseUseCase<RoleModel, RoleRepository> {
  constructor(repository: RoleRepository) {
    super(repository);
  }
}
