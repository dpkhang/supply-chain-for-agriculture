import { DataTypes } from "sequelize";
import { BaseEntity } from "./base/base.entity";

export class tbl_xavien extends BaseEntity {

    id_xavien = {
        type: DataTypes.INTEGER,
        autoInCrement: true,
        primaryKey: true
    }

    id_user = {
        type: DataTypes.INTEGER
    }

    id_hoptacxa = {
        type: DataTypes.INTEGER
    }

}