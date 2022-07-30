import { DataTypes } from "sequelize";
import { BaseEntity } from "./base/base.entity";

export class tbl_thuonglai extends BaseEntity {

    id_xavien = {
        type: DataTypes.INTEGER,
        autoInCrement: true,
        primaryKey: true
    }

    id_user= {
        type: DataTypes.INTEGER
    }

    name_thuonglai = {
        type: DataTypes.STRING(255)
    }

}