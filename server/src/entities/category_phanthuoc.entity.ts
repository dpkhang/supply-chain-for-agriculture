import { DataTypes } from "sequelize";
import { BaseEntity } from "./base/base.entity";

export class tbl_category_phanthuoc extends BaseEntity {

    id_role = {
        type: DataTypes.INTEGER,
        autoInCrement: true,
        primaryKey: true
    }

    name_category_phanthuoc = {
        type: DataTypes.STRING(255)
    }
    
}