import { DataTypes } from "sequelize";
import { BaseEntity } from "./base/base.entity";

export class tbl_xavien extends BaseEntity {

    id_xavien = {
        type: DataTypes.INTEGER,
        autoInCrement: true,
        primaryKey: true
    }

    id_hoptacxa = {
        type: DataTypes.INTEGER
    }

    fullname = {
        type: DataTypes.STRING(255)
    }

    password = {
        type: DataTypes.STRING(255)
    }
    
    DOB = {
        type: DataTypes.DATE
    }

    address = {
        type: DataTypes.STRING(255)
    }

    phone_number = {
        type: DataTypes.STRING(255)
    }

    // avatar = {
    //     type: DataTypes.STRING(255)
    // }
     
    email = {
        type: DataTypes.STRING(255)
    }

    wallet = {
        type: DataTypes.STRING(255)
    }
}