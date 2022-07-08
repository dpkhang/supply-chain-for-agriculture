import express from 'express'
import { Giaodichmuaban_luaController } from '../controllers/giaodichmuaban_lua.controller' 
const route = express.Router()

const giaodichmuaban_luaController = new Giaodichmuaban_luaController

route.get('/', giaodichmuaban_luaController.getContracts)
route.post('/',giaodichmuaban_luaController.addContract)

export default route