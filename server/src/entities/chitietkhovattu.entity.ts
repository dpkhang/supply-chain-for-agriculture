import { DataTypes } from "sequelize";
import { BaseEntity } from "./base/base.entity";

export class tbl_chitietkhovattu extends BaseEntity {

    id_chitietkhovattu = {
        type: DataTypes.INTEGER,
        autoInCrement: true,
        primaryKey: true
    }

    id_khovattu = {
        type: DataTypes.INTEGER
    }

    id_phanbonthuocbaove = {
        type: DataTypes.INTEGER
    }
    
    qty_phanbonthuocbaove = {
        type: DataTypes.INTEGER
    }
    
}