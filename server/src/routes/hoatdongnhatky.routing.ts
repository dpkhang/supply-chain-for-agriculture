import express from 'express'
import { HoatdongnhatkyController } from '../controllers/hoatdongnhatky.controller' 
const route = express.Router()

const hoatdongnhatkyController = new HoatdongnhatkyController

route.get('/', hoatdongnhatkyController.getContracts)

export default route