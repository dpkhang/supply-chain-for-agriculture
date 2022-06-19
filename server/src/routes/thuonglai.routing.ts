import express from 'express'
import { ThuonglaiController } from '../controllers/thuonglai.controller'
const route = express.Router()

const thuonglaiController = new ThuonglaiController

route.get('/', thuonglaiController.getAll)

export default route