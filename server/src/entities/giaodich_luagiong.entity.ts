import { DataTypes } from "sequelize";

export class tbl_giaodich_luagiong {

    id_giaodich_luagiong = {
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

    id_lichmuavu = {
        type: DataTypes.INTEGER
    }

    id_gionglua = {
        type: DataTypes.INTEGER
    }

    soluong = {
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
}