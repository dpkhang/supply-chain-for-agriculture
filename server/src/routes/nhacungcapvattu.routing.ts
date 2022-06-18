import express from 'express'
import { NhacungcapvattuController } from '../controllers/nhacungcapvattu.controller'
const route = express.Router()

const nhacungcapvattuController = new NhacungcapvattuController

route.get('/', nhacungcapvattuController.getAll)

export default route