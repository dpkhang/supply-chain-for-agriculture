import { DataTypes } from "sequelize";
import { BaseEntity } from "./base/base.entity";

export class tbl_lohang_lua extends BaseEntity {

    id_lohang_lua = {
        type: DataTypes.INTEGER,
        autoInCrement: true,
        primaryKey: true
    }

    id_giaodichmuaban_lua = {
        type: DataTypes.INTEGER
    }

    id_xavien = {
        type: DataTypes.INTEGER
    }
    
    id_lichmuavu = {
        type: DataTypes.INTEGER
    }

    name_lohang = {
        type: DataTypes.STRING
    }

    soluong = {
        type: DataTypes.STRING(255)
    }

    img_lohang = {
        type: DataTypes.STRING
    }

    description_lohang = {
        type: DataTypes.TEXT
    }
}