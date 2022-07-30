import { DataTypes } from "sequelize";
import { BaseEntity } from "./base/base.entity";

export class tbl_user extends BaseEntity {

    id_user = {
        type: DataTypes.INTEGER,
        autoInCrement: true,
        primaryKey: true
    }

    username = {
        type: DataTypes.STRING(255)
    }

    password = {
        type: DataTypes.STRING(255)
    }

    fullname = {
        type: DataTypes.STRING(255)
    }

    email = {
        type: DataTypes.STRING(255)
    }

    phone_number = {
        type: DataTypes.STRING(255)
    }

    address = {
        type: DataTypes.STRING(255)
    }

    wallet = {
        type: DataTypes.STRING(255)
    }

    dob = {
        type: DataTypes.DATE
    }
    
}