import express from 'express'
import { NhatkydongruongController } from '../controllers/nhatkydongruong.controller' 
import { ThemNhatKyDongRuongValidator } from '../middlewares/validator/NhatKyDongRuong.middleware'
const route = express.Router()

const nhatkydongruongController = new NhatkydongruongController

route.get('/', nhatkydongruongController.getContracts)

route.get('/:id', nhatkydongruongController.getContractById)

route.get('/xa-vien/:id', nhatkydongruongController.getContractByIdXaVien)

route.post('/', ThemNhatKyDongRuongValidator, nhatkydongruongController.storeTransaction)

export default route