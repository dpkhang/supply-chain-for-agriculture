import express from 'express'
import { GiaoDichMuaBanSanPhamController } from '../controllers/giaodichmuaban_sanpham.controller';
import { GiaoDichMuaSanPhamValidator } from '../middlewares/validator/GiaoDichMuaBanSanPham';
const route = express.Router()


const giaoDichMuaBanSanPham = new GiaoDichMuaBanSanPhamController()

route.get('/'       , giaoDichMuaBanSanPham.getContracts)
route.get('/:id'       , giaoDichMuaBanSanPham.getContractById)
route.post('/'      , GiaoDichMuaSanPhamValidator , giaoDichMuaBanSanPham.addContract)
export default route