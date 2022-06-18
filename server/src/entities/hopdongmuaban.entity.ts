import { DataTypes } from "sequelize";
import { BaseEntity } from "./base/base.entity";

export class tbl_hopdongmuaban extends BaseEntity {

    id_hopdongmuaban = {
        type: DataTypes.INTEGER,
        autoInCrement: true,
        primaryKey: true
    }

    id_thuonglai = {
        type: DataTypes.INTEGER
    }

    id_hoptacxa = {
        type: DataTypes.INTEGER
    }

    id_lichmuavu = {
        type: DataTypes.INTEGER
    }

    title_hopdongmuaban = {
        type: DataTypes.STRING(255)
    }
    
}