import express from 'express'
import { GiaoDichMuaBanSanPhamController } from '../controllers/giaodichmuaban_sanpham.controller';
const route = express.Router()


const giaoDichMuaBanSanPham = new GiaoDichMuaBanSanPhamController()

route.get('/'       , giaoDichMuaBanSanPham.getContracts)
route.get('/:id'       , giaoDichMuaBanSanPham.getContractById)
route.post('/'       , giaoDichMuaBanSanPham.addContract)
export default route