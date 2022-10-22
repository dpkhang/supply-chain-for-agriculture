import { DataTypes } from "sequelize";
import { BaseEntity } from "./base/base.entity";

export class tbl_hoatdongmuavu extends BaseEntity {
  id_hoatdongmuavu = {
    type: DataTypes.INTEGER,
    autoInCrement: true,
    primaryKey: true,
  };

  id_lichmuavu = {
    type: DataTypes.INTEGER,
  };

  name_hoatdong = {
    type: DataTypes.STRING(255),
  };

  description_hoatdong = {
    type: DataTypes.TEXT,
  };

  date_state = {
    type: DataTypes.DATE,
  };

  date_end = {
    type: DataTypes.DATE,
  };

  status = {
    type: DataTypes.STRING(255),
  };

  attach = {
    type: DataTypes.STRING(255),
  };
}
