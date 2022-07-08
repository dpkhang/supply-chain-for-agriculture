import express from 'express'
import { NhatkydongruongController } from '../controllers/nhatkydongruong.controller' 
const route = express.Router()

const nhatkydongruongController = new NhatkydongruongController

route.get('/', nhatkydongruongController.getContracts)

export default route