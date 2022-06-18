import { DataTypes } from "sequelize";
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

    address_thuadat = {
        type: DataTypes.STRING(255)
    }

    location_thuadat = {
        type: DataTypes.STRING(255)
    }

    thumbnail_thuadat = {
        type: DataTypes.STRING(255)
    }

    description_thuadat = {
        type: DataTypes.STRING(255)
    }
    
}