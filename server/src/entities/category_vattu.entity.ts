import { DataTypes } from "sequelize/types";
import { BaseEntity } from "./base/base.entity";

export class tbl_category_vattu extends BaseEntity {

    id_category_vattu = {
        type: DataTypes.INTEGER,
        autoInCrement: true,
        primaryKey: true
    }

    id_danhmuaquydinh = {
        type: DataTypes.INTEGER
    }

    name_category_vattu = {
        type: DataTypes.STRING(255)
    }

}