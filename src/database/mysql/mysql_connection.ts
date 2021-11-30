import { Sequelize } from "sequelize";

export class SequelizeConnectionMannager {

    private readonly sequelize: Sequelize;

    constructor() {
        this.sequelize = new Sequelize("mysql://root:asd123@localhost:3306/mydb");
    }

    public get connection(): Sequelize {
        return this.sequelize;
    }

}