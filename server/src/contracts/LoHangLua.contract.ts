
import { BaseContract }   from './base/base.contract'
import LoHangLuaABI       from "../abis/LoHangLua.json"
const ADDRESS_LoHangLua = process.env.ADDRESS_LoHangLua || ""

export interface LoHangLua {
    id_LoHangLua:       number,
    id_XaVien:          number,
    id_GiongLua:        number,
    id_NhatKyDongRuong: number,
    soluong:            number,
    thongTinKhac:       string,
}

export class LoHangLuaContract extends BaseContract {

    constructor() {
        super(LoHangLuaABI, ADDRESS_LoHangLua)
    }

    addContract = async (data: LoHangLua, sender: string) => {
        this.methods.ThemLoHangLua(data.id_XaVien, data.id_LoHangLua, data.id_GiongLua, data.id_NhatKyDongRuong, data.soluong, data.thongTinKhac)
        ?.send({
            from: sender,
            gas: 3000000
        })
    }

    getContractById = async (id_contract: number) => {
        return await this.methods.DanhSachLoHangLua(id_contract).call()
    }
}