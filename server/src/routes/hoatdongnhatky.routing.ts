import express from 'express'
import { HoatdongnhatkyController } from '../controllers/hoatdongnhatky.controller' 
import { NhatKyHoatDongValidator } from '../middlewares/HoatDongNhatKy.middleware' 
import { VatTuSuDungValidator } from '../middlewares/VatTuSuDung.middleware'
const route = express.Router()

const hoatdongnhatkyController = new HoatdongnhatkyController

route.get('/', hoatdongnhatkyController.getContracts)

route.post('/create-activity-log', NhatKyHoatDongValidator, VatTuSuDungValidator, hoatdongnhatkyController.createContract)

export default route