import { DataTypes } from "sequelize";
import { Literal } from "sequelize/types/utils";
import { BaseEntity } from "./base/base.entity";

export class tbl_giaodichmuaban_lua extends BaseEntity {

    id_giaodichmuaban_lua = {
        type: DataTypes.INTEGER,
        autoInCrement: true,
        primaryKey: true
    }

    id_xavien = {
        type: DataTypes.INTEGER
    }

    id_thuonglai = {
        type: DataTypes.INTEGER
    }

    id_lichmuavu = {
        type: DataTypes.INTEGER
    }

    status = {
        type: DataTypes.INTEGER
    }

    hoptacxa_xacnhan = {
        type: DataTypes.INTEGER
    }

    nhacungcap_xacnhan = {
        type: DataTypes.INTEGER
    }

    xavien_xacnhan = {
        type: DataTypes.INTEGER
    }

    description_giaodich = {
        type: DataTypes.TEXT
    }

    price_lohang = {
        type: DataTypes.INTEGER
    }

    soluong = {
        type: DataTypes.INTEGER
    }
}