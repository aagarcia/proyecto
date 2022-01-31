import { HistoryModel } from "@history/domain/history.model";
import { BaseRepository } from "@shared/application/base.repository";

export interface HistoryRepository extends BaseRepository<HistoryModel> {}
