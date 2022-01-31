import BasePersonal from '@entities/base-personal';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'driver' })
export class Driver extends BasePersonal {
    @PrimaryGeneratedColumn()
    id: number;
}