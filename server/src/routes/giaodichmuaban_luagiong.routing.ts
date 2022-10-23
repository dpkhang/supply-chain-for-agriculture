import express from "express";
import { GiaoDichMuaBanGiongLuaController } from "../controllers/GiaoDichMuaBanLuaGiong.controller";
import { GiaoDichMuaBanGiongLuaValidator } from "../middlewares/validator/GiaoDichMuaBanGiongLua.middlewares";

const route = express.Router();

const giaoDichMuaBan_GiongLuaController =
  new GiaoDichMuaBanGiongLuaController();

route.post(
  "/",
  GiaoDichMuaBanGiongLuaValidator,
  giaoDichMuaBan_GiongLuaController.createContract
);

route.get("/:id", giaoDichMuaBan_GiongLuaController.getContractById);

route.get(
  "/rice-product/:id",
  giaoDichMuaBan_GiongLuaController.getContractById
);

export default route;
