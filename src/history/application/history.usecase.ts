import { HistoryModel } from "@history/domain/history.model";
import { BaseUseCase } from "@shared/application/base.usecase";
import { HistoryRepository } from "@history/application/history.repository";

export class HistoryUseCase extends BaseUseCase<HistoryModel, HistoryRepository> {
  constructor(repository: HistoryRepository) {
    super(repository);
  }
}
