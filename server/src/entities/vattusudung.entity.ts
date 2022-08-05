import { DataTypes } from "sequelize";
import { BaseEntity } from "./base/base.entity";

export class tbl_vattusudung extends BaseEntity {

    id_vattusudung = {
        type: DataTypes.INTEGER,
        autoInCrement: true,
        primaryKey: true
    }

    id_nhatkydongruong = {
        type: DataTypes.INTEGER
    }

    id_lohangvattu = {
        type: DataTypes.INTEGER
    }

    soluong= {
        type: DataTypes.INTEGER
    }

    timeuse = {
        type: DataTypes.DATE
    }

}