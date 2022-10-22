import { DataTypes } from "sequelize";
import { BaseEntity } from "./base/base.entity";

export class tbl_nhacungcapvattu extends BaseEntity {
  id_nhacungcapvattu = {
    type: DataTypes.INTEGER,
    autoInCrement: true,
    primaryKey: true,
  };

  id_user = {
    type: DataTypes.INTEGER,
  };

  name_daily = {
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
