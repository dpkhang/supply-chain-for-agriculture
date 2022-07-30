import { DataTypes } from "sequelize";
import { Literal } from "sequelize/types/utils";
import { BaseEntity } from "./base/base.entity";

export class tbl_thuadat extends BaseEntity {

    id_thuadat = {
        type: DataTypes.INTEGER,
        autoInCrement: true,
        primaryKey: true
    }

    id_xavien = {
        type: DataTypes.INTEGER
    }

    address = {
        type: DataTypes.STRING(255)
    }

    localtion = {
        type: DataTypes.STRING(255)
    }

    thumbnail = {
        type: DataTypes.STRING(255)
    }

    description = {
        type: DataTypes.STRING(255)
    }

    status = {
        type: DataTypes.INTEGER
    }
    
}