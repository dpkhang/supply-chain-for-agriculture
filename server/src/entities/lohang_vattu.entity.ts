import { DataTypes } from "sequelize";
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

    id_nhacungcapvattu = {
        type: DataTypes.INTEGER
    }

    qty_lohang = {
        type: DataTypes.INTEGER
    }

    img_lohang = {
        type: DataTypes.STRING(255)
    }
    
}