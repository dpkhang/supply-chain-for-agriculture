import { VatTuSuDung } from './VatTuSuDung.contract';
import { BaseContract } from './base/base.contract'
import HoatDongNhatKyABI from "../abis/HoatDongNhatKy.json"
const ADDRESS_HoatDongNhatKy = process.env.ADDRESS_HoatDongNhatKy || ""

export interface NhatKyHoatDong {
    d_NhatKyDongRuong: number
    id_XaVien:         number
    id_HoatDongNhatKy: number
    thoigian:          string    
    danhSachVatTu: VatTuSuDung[]
}

export class HoatDongNhatKyContract extends BaseContract {
    constructor() {
        super(HoatDongNhatKyABI, ADDRESS_HoatDongNhatKy)
    }

    addContract = async (data: NhatKyHoatDong, sender: string) => {
        await this.methods.ThemHoatDongNhatKy(data)
            ?.send({
                from: sender,
                gas: 300000
            })
    }

    getContractById = async (id_contract: number) => {
        return await this.methods.ThemHoatDongNhatKy(id_contract)?.call()
    }
}