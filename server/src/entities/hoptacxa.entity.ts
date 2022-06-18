import { DataTypes } from "sequelize";
import { BaseEntity } from "./base/base.entity";

export class tbl_hoptacxa extends BaseEntity {

    id_hoptacxa = {
        type: DataTypes.INTEGER,
        autoInCrement: true,
        primaryKey: true
    }

    name_hoptacxa = {
        type: DataTypes.STRING(255)
    }

    address_hoptacxa = {
        type: DataTypes.STRING(255)
    }

    phone_number_hoptacxa = {
        type: DataTypes.STRING(255)
    }

    email_hoptacxa = {
        type: DataTypes.STRING(255)
    }

    active = {
        type: DataTypes.INTEGER
    }
    
}