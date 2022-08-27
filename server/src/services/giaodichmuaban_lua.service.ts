import { LoHangLua, LoHangLuaContract } from './../contracts/LoHangLua.contract'
import { GiaoDichMuaBanLua } from './../contracts/GiaoDichMuaBanLua.contract'
import { Giaodichmuaban_luaRepository } from './../repositories/giaodichmuaban_lua.repository'
import { BaseService } from "./base/base.service"
import { GiaoDichMuaBanLuaContract } from "../contracts/GiaoDichMuaBanLua.contract"
import { GiaoDichMuaBanLuaDTO } from '../dtos/request/GiaoDichMuaBanLua.dto'
import { Sender } from '../dtos/request/Sender.dto'

export class GiaiDichMuaBanLua_Service extends BaseService {
    //_giaodichmuaban_luaService
    private _GiaoDichMuaBanLuaContract
    private _GiaoDichMuaBanLuaRepository
    private _LoHangLua


    constructor() {
        const giaoDichMuaBanLuaRepository = new Giaodichmuaban_luaRepository()
        const giaoDichMuaBanLuaContract = new GiaoDichMuaBanLuaContract()
        const loHangLua = new LoHangLuaContract()
        super(giaoDichMuaBanLuaRepository)
        this._GiaoDichMuaBanLuaContract = giaoDichMuaBanLuaContract
        this._GiaoDichMuaBanLuaRepository = giaoDichMuaBanLuaRepository
        this._LoHangLua = loHangLua
    }

    getContracts = async (limit: number = 10, page: number = 1) => {
        const giaoDichMuaBanLua = await this._GiaoDichMuaBanLuaContract.getContracts("SuKienGiaoDich")

        const results = []

        if (giaoDichMuaBanLua && giaoDichMuaBanLua?.length > 0) {
            const totalPage = (limit != 0) ? Math.ceil(giaoDichMuaBanLua.length / limit) : 1
            const startIndex = (page - 1) * limit
            const endIndex = ( startIndex + limit > giaoDichMuaBanLua.length ) ? giaoDichMuaBanLua.length : startIndex + limit
            const giaoDichMuaBanLuaLimit = (startIndex == endIndex) ? giaoDichMuaBanLua : giaoDichMuaBanLua.slice(startIndex, endIndex)

            for(let contract of giaoDichMuaBanLuaLimit) {
                const lohangLua =  await this._LoHangLua.getContractById(contract.returnValues.id_LoHangLua)
                const giaoDich = {
                    id_GiaoDich: contract.returnValues.id_GiaoDich,
                    id_LoHangLua: contract.returnValues.id_LoHangLua,
                    id_XaVien: contract.returnValues.id_XaVien,
                    id_ThuongLai: contract.returnValues.id_ThuongLai,
                    thoigianGiaoDich: contract.returnValues.ThoiGianGiaoDich,
                    giaLoHang: contract.returnValues.GiaLoHang,
                    id_GiongLua: lohangLua.id_GiongLua,
                    id_NhatKyDongRuong: lohangLua.id_NhatKyDongRuong,
                    tenGiongLua: lohangLua.TenGiongLua,
                    thoigianLoHang: lohangLua.ThoiGian,
                    soluong: lohangLua.SoLuong,
                }
                results.push(giaoDich)
            }
            
            return {
                totalPage: totalPage,
                totalItem: giaoDichMuaBanLuaLimit.length,
                page: page,
                results
            }
        }
        return null
    }

    addContract = async (data: GiaoDichMuaBanLuaDTO, sender: Sender) => {
        const giaoDichMuaBanLua_Data: GiaoDichMuaBanLua = {
            intProperties: [
                data.id_XaVien, 
                data.id_ThuongLai, 
                data.id_GiaoDich, 
                data.id_LoHangLua, 
                data.giaLoHang, 
                data.thoigianGiaoDich
            ],
            boolProperties: [
                data.xacnhanXaVien, 
                data.xacnhanThuongLai,
                data.xacnhanHTX
            ]
        }

        const loHangLua_Data: LoHangLua = {
            intProperties: [
                data.id_XaVien,
                data.id_LoHangLua,
                data.id_GiongLua,
                data.id_LichMuaVu,
                data.soluong,
                data.thoigianLoHang,
                data.dientichdat,
                data.maxSoLuong
            ],
            stringProperties: [
                data.tenGiongLua
            ]

        }

        const resultLoHangLua  = await this._LoHangLua.addContract(loHangLua_Data, sender)
        if(resultLoHangLua){
            const resultGiaoDichLua  = await this._GiaoDichMuaBanLuaContract.addContract(giaoDichMuaBanLua_Data, sender)
            if(resultGiaoDichLua)
                return {
                    ...data
                }
            return null
        }
        return null
    }

    getContractById = async (id_GiaoDich: number) => {
        const giaoDichMuaBanLua = await this._GiaoDichMuaBanLuaContract.getContractById(id_GiaoDich)
        if (giaoDichMuaBanLua) {
            const loHangLua = await this._LoHangLua.getContractById(giaoDichMuaBanLua.id_LoHangLua)
            if (loHangLua) {
                const giaoDich = {
                    id_GiaoDich: giaoDichMuaBanLua.id_GiaoDich,
                    id_LoHangLua: giaoDichMuaBanLua.id_LoHangLua,
                    id_XaVien: giaoDichMuaBanLua.id_XaVien,
                    id_ThuongLai: giaoDichMuaBanLua.id_ThuongLai,
                    thoigianGiaoDich: giaoDichMuaBanLua.ThoiGianGiaoDich,
                    giaLoHang: giaoDichMuaBanLua.GiaLoHang,
                    id_GiongLua: loHangLua.id_GiongLua,
                    id_NhatKyDongRuong: loHangLua.id_NhatKyDongRuong,
                    tenGiongLua: loHangLua.TenGiongLua,
                    thoigianLoHang: loHangLua.ThoiGian,
                    soluong: loHangLua.SoLuong,
                }
                return giaoDich
            } 
            return null
        }
        return null
    }
}