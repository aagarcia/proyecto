import { DriverRepository } from '@driver/application/driver.repository';
import { DriverModel } from '@driver/domain/driver.model';
import { BaseUseCase } from "@shared/application/base.usecase";

export class DriverUseCase extends BaseUseCase<DriverModel, DriverRepository> {
    constructor(public repository: DriverRepository) {
        super(repository);
    }
}