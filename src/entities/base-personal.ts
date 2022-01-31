import Base from "@entities/base";
import { Column } from "typeorm";

export default class BasePersonal extends Base {
    @Column({ type: "varchar", length: 50 })
    name: string;

    @Column({ type: "varchar", length: 50 })
    maternal_surname: string;

    @Column({ type: "varchar", length: 50 })
    paternal_surname: string;
}