import express from 'express'
import { KhohangvattuController } from '../controllers/khohangvattu.controller' 
const route = express.Router()

const khohangvattuController = new KhohangvattuController

route.get('/', khohangvattuController.getAll)

export default route