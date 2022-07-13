import { VatTuSuDung } from './VatTuSuDung.contract';
import { BaseContract } from './base/base.contract'
import HoatDongNhatKyABI from "../abis/HoatDongNhatKy.json"
const ADDRESS_HoatDongNhatKy = process.env.ADDRESS_HoatDongNhatKy || ""

export interface NhatKyHoatDong {
    id_NhatKyDongRuong      : number
    id_HoatDongNhatKy       : number
    ThoiGian                : number
    address_NhatKyDongRuong : string    
}

export class HoatDongNhatKyContract extends BaseContract {
    constructor() {
        super(HoatDongNhatKyABI, ADDRESS_HoatDongNhatKy)
    }

    addContract = async (data: NhatKyHoatDong, sender: string) => {
        await this.methods.ThemHoatDongNhatKy(
            data.id_NhatKyDongRuong,
            data.id_HoatDongNhatKy,
            data.ThoiGian,
            data.address_NhatKyDongRuong
        )?.send({
            from: sender,
            gas: 300000
        })
    }

    getContractById = async (id_contract: number) => {
        return await this.methods.DanhSachHoatDongNhatKy(id_contract)?.call()
    }
}