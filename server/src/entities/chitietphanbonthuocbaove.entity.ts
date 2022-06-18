import { DataTypes } from "sequelize";
import { BaseEntity } from "./base/base.entity";

export class tbl_chitietphanbonthuocbaove extends BaseEntity {

    id_chitietphanbonthuocbaove = {
        type: DataTypes.INTEGER,
        autoInCrement: true,
        primaryKey: true
    }

    id_phanbonthuocbaove = {
        type: DataTypes.INTEGER
    }

    id_hoatdongnhatky = {
        type: DataTypes.INTEGER
    }

    qty_phanbonthuocbaove = {
        type: DataTypes.INTEGER
    }

    total_phanbonthuocbaove = {
        type: DataTypes.INTEGER
    }
    
}