import { Sequelize } from "sequelize";
import { DataTypes } from "sequelize";
import { BaseEntity } from "./base/base.entity";

export class tbl_hoatdongnhatky extends BaseEntity {

    id_hoatdongnhatky = {
        type: DataTypes.INTEGER,
        autoInCrement: true,
        primaryKey: true
    }

    id_nhatkydongruong = {
        type: DataTypes.INTEGER
    }

    name_hoatdong = {
        type: DataTypes.STRING(255)
    }

    description_hoatdong = {
        type: DataTypes.TEXT
    }

    tinhhinhsinhtruong = {
        type: DataTypes.TEXT
    }
    
    img_hoatdong = {
        type: DataTypes.STRING(255)
    }
}