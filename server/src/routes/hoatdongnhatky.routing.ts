import express from 'express'
import { HoatdongnhatkyController } from '../controllers/hoatdongnhatky.controller' 
import { NhatKyHoatDongValidator } from '../dtos/request/NhatKyHoatDong.dto'
const route = express.Router()

const hoatdongnhatkyController = new HoatdongnhatkyController

route.get('/', hoatdongnhatkyController.getContracts)

route.post('/create-activity-log', NhatKyHoatDongValidator, hoatdongnhatkyController.createContract)

export default route