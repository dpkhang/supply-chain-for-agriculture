import { DataTypes } from "sequelize";
import { BaseEntity } from "./base/base.entity";

export class tbl_danhgiacuoimua extends BaseEntity {

    id_danhgiacuoimua = {
        type: DataTypes.INTEGER,
        autoInCrement: true,
        primaryKey: true
    }

    id_nhatkydongruong = {
        type: DataTypes.INTEGER
    }

    giong = {
        type: DataTypes.INTEGER
    }

    phanbon = {
        type: DataTypes.INTEGER
    }

    xangdau = {
        type: DataTypes.INTEGER
    }

    vattukhac = {
        type: DataTypes.INTEGER
    }

    lamdat = {
        type: DataTypes.INTEGER
    }

    gieosa = {
        type: DataTypes.INTEGER
    }

    lamco = {
        type: DataTypes.INTEGER
    }

    bomtuoi = {
        type: DataTypes.INTEGER
    }

    thuhoach = {
        type: DataTypes.INTEGER
    }

    rahat = {
        type: DataTypes.INTEGER
    }

    phoisay = {
        type: DataTypes.INTEGER
    }

    vanchuyen = {
        type: DataTypes.INTEGER
    }

    thuedat = {
        type: DataTypes.INTEGER
    }

    thuyloiphi = {
        type: DataTypes.INTEGER
    }

    tongsanluong = {
        type: DataTypes.INTEGER
    }

    giaban = {
        type: DataTypes.DOUBLE
    }

    thuanloi = {
        type: DataTypes.TEXT
    }

    khokhan = {
        type: DataTypes.TEXT
    }

    kiennghi ={
        type: DataTypes.TEXT
    }
}