import { BaseContract } from './base/base.contract'
import NhatKyDongRuongABI from "../abis/NhatKyDongRuong.json"
const ADDRESS_NhatKyDongRuong = process.env.ADDRESS_NhatKyDongRuong || ""

export interface NhatKyDongRuong {
    id_XaVien           : number;
    id_NhatKyDongRuong  : number;
    id_LichMuaVu        : number;
    id_ThuaDat          : number;
    ThoiGian            : number;
}

export class NhatKyDongRuongContract extends BaseContract {
    constructor() {
        super(NhatKyDongRuongABI, ADDRESS_NhatKyDongRuong)
    }

    addContract = async (data: NhatKyDongRuong, sender: string) => {
        try {

            await this.methods.ThemNhatKyDongRuong(
                data.id_XaVien,
                data.id_NhatKyDongRuong,
                data.id_LichMuaVu,
                data.id_ThuaDat,
                data.ThoiGian
            )?.send({
                from: sender,
                gas: 300000
            })

        } catch ( err ) {
            throw err
        }
    }

    getContractById = async (id_contract: number) => {
        return await this.methods.DanhSachNhatKyDongRuong(id_contract)?.call()
    }
}