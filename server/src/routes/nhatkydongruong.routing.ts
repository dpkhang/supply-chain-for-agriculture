import express from 'express'
import { NhatkydongruongController } from '../controllers/nhatkydongruong.controller' 
import { ThemNhatKyDongRuongValidator } from '../dtos/request/NhatKyDongRuong.dto'
const route = express.Router()

const nhatkydongruongController = new NhatkydongruongController

route.get('/', nhatkydongruongController.getContracts)

route.post('/create-field-log', ThemNhatKyDongRuongValidator as any, nhatkydongruongController.storeTransaction)

export default route