import { DataTypes } from "sequelize/types";
import { BaseEntity } from "./base/base.entity";

export class tbl_gionglua extends BaseEntity {

    id_gionglua = {
        type: DataTypes.INTEGER,
        autoInCrement: true,
        primaryKey: true
    }

    name_gionglua = {
        type: DataTypes.STRING(255)
    }

}
