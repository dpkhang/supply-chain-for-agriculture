import express from 'express'
import { GiaoDichMuaBanGiongLuaController } from '../controllers/GiaoDichMuaBanGiongLua.controller' 
import { GiaoDichMuaBanGiongLuaValidator } from '../middlewares/validator/GiaoDichMuaBanGiongLua.middlewares'

const route = express.Router()

const giaoDichMuaBan_GiongLuaController = new GiaoDichMuaBanGiongLuaController

route.post('/', GiaoDichMuaBanGiongLuaValidator, giaoDichMuaBan_GiongLuaController.createContract)

export default route