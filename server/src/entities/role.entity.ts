import { DataTypes } from "sequelize";
import { BaseEntity } from "./base/base.entity";

export class tbl_role extends BaseEntity {

    id_role = {
        type: DataTypes.INTEGER,
        autoInCrement: true,
        primaryKey: true
    }

    name_role = {
        type: DataTypes.STRING(255)
    }
    
}