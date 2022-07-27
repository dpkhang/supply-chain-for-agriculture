import express from 'express'
import { GiaoDichMuaBanGiongLuaController } from '../controllers/GiaoDichMuaBanGiongLua.controller' 

const route = express.Router()

const giaoDichMuaBan_GiongLuaController = new GiaoDichMuaBanGiongLuaController

route.post('/', giaoDichMuaBan_GiongLuaController.createContract)

export default route