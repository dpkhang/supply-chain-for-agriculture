import { DataTypes } from "sequelize";
import { BaseEntity } from "./base/base.entity";

export class xavien_role extends BaseEntity {

    id = {
        type: DataTypes.INTEGER,
        autoInCrement: true,
        primaryKey: true
    }

    xavien_id_xavien = {
        type: DataTypes.INTEGER
    }

    role_id_role = {
        type: DataTypes.INTEGER
    }
    
}