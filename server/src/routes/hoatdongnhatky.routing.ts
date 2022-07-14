import express from 'express'
import { HoatdongnhatkyController } from '../controllers/hoatdongnhatky.controller' 
import { NhatKyHoatDongValidator } from '../dtos/request/HoatDongNhatKy.dto'
import { VatTuSuDungValidator } from '../dtos/request/VatTuSuDung.dto'
const route = express.Router()

const hoatdongnhatkyController = new HoatdongnhatkyController

route.get('/', hoatdongnhatkyController.getContracts)

route.post('/create-activity-log', NhatKyHoatDongValidator, VatTuSuDungValidator, hoatdongnhatkyController.createContract)

export default route