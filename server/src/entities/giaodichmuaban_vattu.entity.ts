import { DataTypes } from "sequelize";
import { BaseEntity } from "./base/base.entity";

export class tbl_giaodichmuaban_vattu extends BaseEntity {

    id_giaodichmuaban_vattu = {
        type: DataTypes.INTEGER,
        autoInCrement: true,
        primaryKey: true
    }

    id_xavien = {
        type: DataTypes.INTEGER
    }

    id_nhacungcapvattu = {
        type: DataTypes.INTEGER
    }

    // name_giaodichmuaban_vattu = {
    //     type: DataTypes.STRING(255)
    // }

    status_giaodich = {
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

    total_giaodich = {
        type: DataTypes.INTEGER
    }

    description_giaodich = {
        type: DataTypes.TEXT
    }
}