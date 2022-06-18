import { DataTypes } from "sequelize";
import { BaseEntity } from "./base/base.entity";

export class tbl_phanbonthuocbaove extends BaseEntity {

    id_phanbonthuocbaove = {
        type: DataTypes.INTEGER,
        autoInCrement: true,
        primaryKey: true
    }

    id_lohang_vattu = {
        type: DataTypes.INTEGER
    }

    id_category_phanthuoc = {
        type: DataTypes.INTEGER
    }

    img_phanbonthuocbaove = {
        type: DataTypes.STRING(255)
    }

    price_phanbonthuocbaove = {
        type: DataTypes.DOUBLE
    }

    description_phanbonthuocbaove = {
        type: DataTypes.TEXT
    }
    
}