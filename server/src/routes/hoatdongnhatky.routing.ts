import express from 'express'
import { HoatdongnhatkyController } from '../controllers/nhatkydongruong.controller' 
import { NhatKyHoatDongValidator } from '../middlewares/validator/HoatDongNhatKy.middleware' 
const route = express.Router()

const hoatdongnhatkyController = new HoatdongnhatkyController

route.get('/'               , hoatdongnhatkyController.getContracts)

route.get('/log/'           , hoatdongnhatkyController.getContractsByIdNhatKy)

route.get('/rice-product/'  , hoatdongnhatkyController.getContractsByIdLoHangLua)

route.get('/:id'            , hoatdongnhatkyController.getContractById)

route.post('/'              , NhatKyHoatDongValidator, hoatdongnhatkyController.createContract)

export default route