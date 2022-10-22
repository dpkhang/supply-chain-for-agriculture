import { DataTypes } from 'sequelize'
import { BaseEntity } from './base/base.entity'

export class tbl_lichmuavu extends BaseEntity {

    id_lichmuavu = {
        type: DataTypes.INTEGER,
        autoInCrement: true,
        primaryKey: true
    }

    id_hoptacxa = {
        type: DataTypes.INTEGER
    }

    id_gionglua = {
        type: DataTypes.INTEGER
    }

    name_lichmuavu = {
        type: DataTypes.STRING(255)
    }

    date_start = {
        type: DataTypes.DATE
    }

    date_end = {
        type: DataTypes.DATE
    }

    status = {
        type: DataTypes.STRING(255)
    }

}