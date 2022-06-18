import { DataTypes } from "sequelize";
import { BaseEntity } from "./base/base.entity";

export class tbl_gionglua extends BaseEntity {

    id_gionglua = {
        type: DataTypes.INTEGER,
        autoInCrement: true,
        primaryKey: true
    }

    id_lohang_vattu = {
        type: DataTypes.INTEGER
    }

    //cho nay hung no viet sai chinh ta
    name_gionglua = {
        type: DataTypes.STRING(255)
    }

    description_gionglua = {
        type: DataTypes.TEXT
    }

    img_gionglua = {
        type: DataTypes.STRING(255)
    }
    
}