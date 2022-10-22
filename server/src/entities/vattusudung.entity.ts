import { DataTypes } from "sequelize";
import { BaseEntity } from "./base/base.entity";

export class tbl_vattusudung extends BaseEntity {

    id_vattusudung = {
        type: DataTypes.BIGINT,
        autoInCrement: true,
        primaryKey: true
    }

    id_nhatkydongruong = {
        type: DataTypes.BIGINT
    }

    id_giaodichmuaban_vattu = {
        type: DataTypes.BIGINT
    }

    soluong= {
        type: DataTypes.INTEGER
    }

    timeuse = {
        type: DataTypes.DATE
    }

}