import { DataTypes } from "sequelize";
import { BaseEntity } from "./base/base.entity";

export class tbl_xavien extends BaseEntity {

    id_xavien = {
        type: DataTypes.INTEGER,
        autoInCrement: true,
        primaryKey: true
    }

    username = {
        type: DataTypes.STRING(50)
    }

    password = {
        type: DataTypes.STRING(255)
    }

    fullname_xavien = {
        type: DataTypes.STRING(50)
    }

    phone_number_xavien = {
        type: DataTypes.STRING(11)
    }

    avatar_xavien = {
        type: DataTypes.STRING(255)
    }
     
    email_xavien = {
        type: DataTypes.STRING(256)
    }

    address_xavien = {
        type: DataTypes.STRING(255)
    }

    day_of_birth_xavien = {
        type: DataTypes.DATE
    }

    roles = {
        type: DataTypes.STRING(10)
    }

    id_hoptacxa = {
        type: DataTypes.INTEGER
    }

    active = {
        type: DataTypes.INTEGER
    }
}