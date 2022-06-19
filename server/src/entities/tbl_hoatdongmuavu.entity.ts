import { DataTypes } from "sequelize";
import { BaseEntity } from "./base/base.entity";

export class tbl_hoatdongmuavu extends BaseEntity {

    id_hoatdongmuavu = {
        type: DataTypes.INTEGER,
        autoInCrement: true,
        primaryKey: true
    }

    id_lichmuavu = {
        type: DataTypes.INTEGER
    }

    ngaylennuoc = {
        type: DataTypes.DATE
    }

    ngayxuongnuoc = {
        type: DataTypes.DATE
    }

    description_hoatdong = {
        type: DataTypes.TEXT
    }
    
}