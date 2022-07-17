import express from 'express'
import { HoatdongnhatkyController } from '../controllers/hoatdongnhatky.controller' 
import { NhatKyHoatDongValidator } from '../middlewares/validator/HoatDongNhatKy.middleware' 
import { VatTuSuDungValidator } from '../middlewares/validator/VatTuSuDung.middleware'
const route = express.Router()

const hoatdongnhatkyController = new HoatdongnhatkyController

route.get('/'       , hoatdongnhatkyController.getContracts)

route.get('/:id'    , hoatdongnhatkyController.getContractById)

route.post('/'      , NhatKyHoatDongValidator, VatTuSuDungValidator, hoatdongnhatkyController.createContract)

route.get('/log/:id', hoatdongnhatkyController.getContractsByIdNhatKy)

export default route