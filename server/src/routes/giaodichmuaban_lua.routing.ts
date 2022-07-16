import express from 'express'
import { Giaodichmuaban_luaController } from '../controllers/giaodichmuaban_lua.controller' 
import { GiaoDichMuaBanLuaValidator } from './../middlewares/validator/GiaoDichMuaBanLua.middleware'
const route = express.Router()

const giaodichmuaban_luaController = new Giaodichmuaban_luaController

route.get('/', giaodichmuaban_luaController.getContracts)
route.get('/:id', giaodichmuaban_luaController.getContractById)
route.post('/', GiaoDichMuaBanLuaValidator, giaodichmuaban_luaController.addContract)

export default route