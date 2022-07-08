import { BaseContract }           from './base/base.contract'
import GiaoDichMuaBanLuaABI       from "../abis/GiaoDichMuaBanLua.json"
const ADDRESS_GIAODICHMUABANLUA = process.env.ADDRESS_GIAODICHMUABANLUA || "0xaB0E3c97933523F4025281fe762D53b188B7Be5F"

export interface GiaoDichMuaBanLua {
    id_GiaoDich:      number,
    id_LoHangLua:     number,
    id_XaVien:        number,
    id_ThuongLai:     number,
    thongTinKhac:     string,
}

export class GiaoDichMuaBanLuaContract extends BaseContract {

    constructor() {
        super(GiaoDichMuaBanLuaABI, ADDRESS_GIAODICHMUABANLUA)
    }

    addContract = async (data: GiaoDichMuaBanLua, sender: string) => {
        await this.methods.ThemGiaoDich(data.id_XaVien, data.id_ThuongLai, data.id_LoHangLua, data.id_GiaoDich, data.thongTinKhac)
            ?.send({
                from: sender,
                gas: 3000000
            })
    }

    getContractById = async (id_contract: number) => {
        return await this.methods.DanhSachGiaoDich(id_contract).call()
    }
}