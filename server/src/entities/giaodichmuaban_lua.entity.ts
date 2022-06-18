import { DataTypes } from "sequelize";
import { BaseEntity } from "./base/base.entity";

export class tbl_giaodichmuaban_lua extends BaseEntity {

    id_giaodichmuaban_lua = {
        type: DataTypes.INTEGER,
        autoInCrement: true,
        primaryKey: true
    }

    id_thuonglai = {
        type: DataTypes.INTEGER
    }

    id_xavien = {
        type: DataTypes.INTEGER
    }

    status_giaodich = {
        type: DataTypes.INTEGER
    }

    hoptacxa_xacnhan = {
        type: DataTypes.INTEGER
    }

    thuonglai_xacnhan = {
        type: DataTypes.INTEGER
    }

    xavien_xacnhan = {
        type: DataTypes.INTEGER
    }

    description_giaodich = {
        type: DataTypes.INTEGER
    }

    price_lohang = {
        type: DataTypes.INTEGER
    }

    total_giaodich = {
        type: DataTypes.INTEGER
    }
    
}