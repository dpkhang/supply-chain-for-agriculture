import { LoHangLua, LoHangLuaContract } from './../contracts/LoHangLua.contract'
import { GiaoDichMuaBanLua } from './../contracts/GiaoDichMuaBanLua.contract'
import { Giaodichmuaban_luaRepository } from './../repositories/giaodichmuaban_lua.repository'
import { BaseService } from "./base/base.service"
import { GiaoDichMuaBanLuaContract } from "../contracts/GiaoDichMuaBanLua.contract"
import { GiaoDichMuaBanLuaDTO } from '../dtos/request/GiaoDichMuaBanLua.dto'

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

    getContracts = async () => {
        const giaoDichMuaBanLua = await this._GiaoDichMuaBanLuaContract.getContracts("SuKienGiaoDich")
        if (giaoDichMuaBanLua && giaoDichMuaBanLua?.length > 0) {
            const data = giaoDichMuaBanLua.map((contract) => {
                const ThongTinKhac = JSON.parse(contract.returnValues.ThongTinKhac)
                // const loHangLua = await this._LoHangLua.getContractById(contract.returnValues.id_LoHangLua)
                return {
                    id_GiaoDich: contract.returnValues.id_GiaoDich,
                    id_LoHangLua: contract.returnValues.id_LoHangLua,
                    id_XaVien: contract.returnValues.id_XaVien,
                    id_ThuongLai: contract.returnValues.id_ThuongLai,
                    thoigianGiaoDich: ThongTinKhac?.ThoiGian,
                    giaLoHang: ThongTinKhac?.GiaLoHang,
                    // loHangLua
                }
            })
            return data
        }
        return
    }

    addContract = async (data: GiaoDichMuaBanLuaDTO, sender: string) => {
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
                data.id_NhatKyDongRuong,
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
                return {
                    ...giaoDichMuaBanLua,
                    ...loHangLua
                }
            } 
            return null
        }
        return null
    }
}