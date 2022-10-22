import { DataTypes } from "sequelize";
import { BaseEntity } from "./base/base.entity";

export class tbl_nhatkydongruong extends BaseEntity {
  id_nhatkydongruong = {
    type: DataTypes.INTEGER,
    autoInCrement: true,
    primaryKey: true,
  };

  id_lichmuavu = {
    type: DataTypes.INTEGER,
  };

  id_thuadat = {
    type: DataTypes.INTEGER,
  };

  id_xavien = {
    type: DataTypes.INTEGER,
  };

  id_hoatdongmuavu = {
    type: DataTypes.INTEGER,
  };

  description = {
    type: DataTypes.TEXT,
  };

  date_start = {
    type: DataTypes.DATE,
  };

  date_end = {
    type: DataTypes.DATE,
  };

  status = {
    type: DataTypes.INTEGER,
  };

  type = {
    type: DataTypes.STRING(255),
  };
}
