import BasePersonal from '@entities/base-personal';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Paramedic extends BasePersonal {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 20 })
    document: string;

    @Column({ type: "int" })
    typeDocument: number;
}