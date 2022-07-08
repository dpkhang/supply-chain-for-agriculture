import { BaseContract } from './base/base.contract'
import NhatKyDongRuongABI from "../abis/NhatKyDongRuong.json"
const ADDRESS_NhatKyDongRuong = process.env.ADDRESS_NhatKyDongRuong || ""

export interface NhatKyDongRuong {
    id_XaVien:          number;
    id_NhatKyDongRuong: number;
    id_LichMuaVu:       number;
    id_ThuaDat:         number;
    thoigian:           string;
}

export class NhatKyDongRuongContract extends BaseContract {
    constructor() {
        super(NhatKyDongRuongABI, ADDRESS_NhatKyDongRuong)
    }

    addContract = async (data: NhatKyDongRuong, sender: string) => {
        await this.methods.ThemNhatKyDongRuong(data)
            ?.send({
                from: sender,
                gas: 300000
            })
    }

    getContractById = async (id_contract: number) => {
        return await this.methods.ThemNhatKyDongRuong(id_contract)?.call()
    }
}