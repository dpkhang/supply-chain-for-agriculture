import { LohangvattuRepository } from './../repositories/lohangvattu.reponsitory';
import { LoHangVatTu, LoHangVatTuContract } from './../contracts/LoHangVatTu.contract';
import { GiaoDichMuaBanVatTu } from './../contracts/GiaoDichMuaBanVatTu.contract';
import { GiaoDichMuaBanVatTuDTO } from './../dtos/request/GiaoDichMuaBanVatTu.dto';
import { BaseService }                      from "./base/base.service"; 
import { GiaoDichMuaBanVatTuContract }      from "../contracts/GiaoDichMuaBanVatTu.contract";

export class GiaoDichMuaBanVatTu_Service extends BaseService {
    private _GiaoDichMuaBanVatTuContract 
    private _LoHangVatTu
    private _LoHangVatTu_Repository

    constructor() {
        const lohangVatTuRepository = new LohangvattuRepository()
        super(lohangVatTuRepository)
        this._GiaoDichMuaBanVatTuContract = new GiaoDichMuaBanVatTuContract()
        this._LoHangVatTu_Repository = lohangVatTuRepository
        this._LoHangVatTu =new LoHangVatTuContract()
    }

    getContracts = async () => {
        const giaoDichMuaVatTu = await this._GiaoDichMuaBanVatTuContract.getContracts("SuKienGiaoDich1")

        const results = []

        if (giaoDichMuaVatTu && giaoDichMuaVatTu?.length > 0) {
            for(let contract of giaoDichMuaVatTu) {
                const lohangVatTu =  await this._LoHangVatTu.getContractById(contract.returnValues.id_LoHangVatTu)
                const giaoDich = {
                    id_GiaoDich: contract.returnValues.id_GiaoDich,
                    id_LoHangVatTu: contract.returnValues.id_LoHangVatTu,
                    id_XaVien: contract.returnValues.id_XaVien,
                    id_NhaCungCap: contract.returnValues.id_NhaCungCap,
                    thoigianGiaoDich: contract.returnValues.ThoiGianGiaoDich,
                    giaLoHang: contract.returnValues.GiaLoHang,
                    id_Muavu: lohangVatTu.id_Muavu,
                    id_VatTu: lohangVatTu.id_VatTu,
                    TenVatTu: lohangVatTu.TenVatTu,
                    thoigianLoHang: lohangVatTu.ThoiGian,
                    soluong: lohangVatTu.SoLuong,
                }
                results.push(giaoDich)
            }
            return results
        }
        return null
    }


    addContract = async (data: GiaoDichMuaBanVatTuDTO, sender: string) => {
        const giaodichMuaBanVatTu_Data: GiaoDichMuaBanVatTu  = {
            intProperties: [
                data.id_XaVien,
                data.id_NhaCungCap,
                data.id_GiaoDich,
                data.id_LoHangVatTu,
                data.giaLoHang,
                data.thoigianGiaoDich
            ],
            boolProperties: [
                data.xacnhanXaVien,
                data.xacnhanNhaCungCap,
                data.xacnhanHTX
            ]
        }

        const lohangVatTu_Data: LoHangVatTu = {
            intProperties: [
                data.id_LoHangVatTu,
                data.id_MuaVu,
                data.id_VatTu,
                data.soluong,
                data.thoigianLoHang
            ],
            stringProperties: [
                data.tenVatTu
            ]
        }
        const resultLoHangVatTu = await this._LoHangVatTu.addContract(lohangVatTu_Data, sender)
        if(resultLoHangVatTu) {
            const resultGiaoDichMuaBanVatTu = await this._GiaoDichMuaBanVatTuContract.addContract(giaodichMuaBanVatTu_Data, sender)
            if(resultGiaoDichMuaBanVatTu)
                return {
                    ...data
                }
            return null
        }
        return null
    }
}