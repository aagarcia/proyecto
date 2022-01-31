import { BeforeInsert, BeforeUpdate, Column } from "typeorm";

export default class Base {
    @Column({type: "datetime"})
    datecreated: Date;

    @Column({type: "datetime"})
    dateUpdated: Date;

    @Column({type: "boolean", default: true})
    active: boolean;

    @BeforeInsert()
    addDateCreated() {
        this.datecreated = new Date();
        this.dateUpdated = new Date();
    }

    @BeforeUpdate()
    addDateUpdated() {
        this.dateUpdated = new Date();
    }
}