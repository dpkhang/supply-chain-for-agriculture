import express from 'express'
import { Giaodichmuaban_vattuController } from '../controllers/giaodichmuaban_vattu.controller'
const route = express.Router()

const giaodichmuaban_vattuController = new Giaodichmuaban_vattuController

route.get('/', giaodichmuaban_vattuController.getContracts)
route.get('/:id', giaodichmuaban_vattuController.getContractById)
route.post('/', giaodichmuaban_vattuController.addContract)

export default route