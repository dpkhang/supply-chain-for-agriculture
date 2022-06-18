import express from 'express'
import { LohangvattuController } from '../controllers/lohang_vattu.controller'
const route = express.Router()

const lohangvattuController = new LohangvattuController

route.get('/', lohangvattuController.getAll)

export default route