import { DataTypes } from "sequelize";
import { Literal } from "sequelize/types/utils";
import { BaseEntity } from "./base/base.entity";

export class tbl_lohang_vattu extends BaseEntity {

    id_lohang_vattu = {
        type: DataTypes.INTEGER,
        autoInCrement: true,
        primaryKey: true
    }

    id_giaodichmuaban_vattu = {
        type: DataTypes.INTEGER
    }

    id_category_vattu = {
        type: DataTypes.INTEGER
    }

    soluong = {
        type: DataTypes.STRING(255)
    }
}