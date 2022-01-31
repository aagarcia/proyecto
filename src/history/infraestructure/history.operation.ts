import { HistoryRepository } from "@history/application/history.repository";
import { HistoryModel } from "@history/domain/history.model";
import { BaseOperation } from "@shared/infraestructure/base.operation";

export class HistoryOperation
  extends BaseOperation<HistoryModel>
  implements HistoryRepository
{
  constructor() {
    super();
  }
}
