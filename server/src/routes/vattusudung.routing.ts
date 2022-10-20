
import express from 'express'
import { VatTuSuDungController } from '../controllers/vattusudung.controller' 
const route = express.Router()

const vatTuSuDungController = new VatTuSuDungController

route.post('/'           , vatTuSuDungController.createContract)

route.get('/'           , vatTuSuDungController.getContracts)

route.get('/:id'        , vatTuSuDungController.getContractById)

route.get('/get-all/:id', vatTuSuDungController.getContractByIdHoatDongNhatKy)

export default route