import express from 'express'
import { Giaodichmuaban_vattuController } from '../controllers/giaodichmuaban_vattu.controller'
const route = express.Router()

const giaodichmuaban_vattuController = new Giaodichmuaban_vattuController

route.get('/', giaodichmuaban_vattuController.getAll)

export default route