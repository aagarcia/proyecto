import { MedicModel } from '@medic/domain/medic.model';
import { DriverModel } from '@driver/domain/driver.model';

export interface HistoryModel {
    numberHistory: string;
    medic: MedicModel;
    driver: DriverModel,
    symptoms: string;
    treatment: string
    observations: string;
    date: Date;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
}