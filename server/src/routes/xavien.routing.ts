import express from 'express'
import { XavienController } from '../controllers/xavien.controller'
const route = express.Router()

const xavienController = new XavienController

route.get('/', xavienController.getAll)

route.post('/register', xavienController.register)

export default route