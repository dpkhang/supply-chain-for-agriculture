import { DataTypes } from "sequelize";
import { Literal } from "sequelize/types/utils";
import { BaseEntity } from "./base/base.entity";

export class tbl_lohang_lua extends BaseEntity {

    id_lohang_lua = {
        type: DataTypes.BIGINT,
        autoInCrement: true,
        primaryKey: true
    }

    id_giaodichmuaban_lua = {
        type: DataTypes.BIGINT
    }

    id_xavien = {
        type: DataTypes.BIGINT
    }

    id_lichmuavu = {
        type: DataTypes.STRING(255)
    }

    soluong = {
        type: DataTypes.BIGINT
    }

    img_lohang = {
        type: DataTypes.STRING(255)
    }

    description_lohang = {
        type: DataTypes.TEXT
    }
}