import { DataTypes } from "sequelize";
import { BaseEntity } from "./base/base.entity";

export class tbl_nhacungcapvattu extends BaseEntity {

    id_nhacungcapvattu = {
        type: DataTypes.INTEGER,
        autoInCrement: true,
        primaryKey: true
    }

    name_daily = {
        type: DataTypes.STRING(255)
    }

    fullname = {
        type: DataTypes.STRING(255)
    }

    password = {
        type: DataTypes.STRING(255)
    }

    dob = {
        type: DataTypes.DATE
    }

    address = {
        type: DataTypes.TEXT
    }

    phone_number = {
        type: DataTypes.STRING(255)
    }

    email = {
        type: DataTypes.STRING(255)
    }

    wallet = {
        type: DataTypes.STRING(255)
    }
    
}