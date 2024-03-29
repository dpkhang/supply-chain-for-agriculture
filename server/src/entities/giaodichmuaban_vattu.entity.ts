import { DataTypes } from "sequelize";
import { Literal } from "sequelize/types/utils";
import { BaseEntity } from "./base/base.entity";

export class tbl_giaodichmuaban_vattu extends BaseEntity {
  id_giaodichmuaban_vattu = {
    type: DataTypes.INTEGER,
    autoInCrement: true,
    primaryKey: true,
  };

  id_xavien = {
    type: DataTypes.INTEGER,
  };

  id_nhacungcapvattu = {
    type: DataTypes.INTEGER,
  };

  id_lichmuavu = {
    type: DataTypes.INTEGER,
  };

  id_category_vattu = {
    type: DataTypes.STRING(255),
  };

  soluong = {
    type: DataTypes.INTEGER,
  };

  price = {
    type: DataTypes.BIGINT
  }

  status = {
    type: DataTypes.INTEGER,
  };

  hoptacxa_xacnhan = {
    type: DataTypes.INTEGER,
  };

  nhacungcap_xacnhan = {
    type: DataTypes.INTEGER,
  };

  xavien_xacnhan = {
    type: DataTypes.INTEGER,
  };

  description_giaodich = {
    type: DataTypes.TEXT,
  };
}
