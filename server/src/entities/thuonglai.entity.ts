import { DataTypes } from "sequelize";
import { BaseEntity } from "./base/base.entity";

export class tbl_thuonglai extends BaseEntity {
  id_thuonglai = {
    type: DataTypes.BIGINT,
    autoInCrement: true,
    primaryKey: true,
  };

  id_user = {
    type: DataTypes.BIGINT,
  };

  name_thuonglai = {
    type: DataTypes.STRING(255),
  };

  thumbnail = {
    type: DataTypes.STRING(255),
  };

  img_background = {
    type: DataTypes.STRING(255),
  };

  description = {
    type: DataTypes.STRING(255),
  };

  active = {
    type: DataTypes.INTEGER,
  };
}
