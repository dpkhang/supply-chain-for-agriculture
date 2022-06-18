import { DataTypes } from "sequelize";
import { BaseEntity } from "./base/base.entity";

export class tbl_khovattu extends BaseEntity {

    id_khovattu = {
        type: DataTypes.INTEGER,
        autoInCrement: true,
        primaryKey: true
    }

    id_xavien = {
        type: DataTypes.INTEGER
    }
    
}