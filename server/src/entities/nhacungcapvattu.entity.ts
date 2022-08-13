import { DataTypes } from "sequelize";
import { BaseEntity } from "./base/base.entity";

export class tbl_nhacungcapvattu extends BaseEntity {

    id_nhacungcapvattu = {
        type: DataTypes.INTEGER,
        autoInCrement: true,
        primaryKey: true
    }

    id_user = {
        type: DataTypes.INTEGER
    }

    name_daily = {
        type: DataTypes.STRING(255)
    }

}