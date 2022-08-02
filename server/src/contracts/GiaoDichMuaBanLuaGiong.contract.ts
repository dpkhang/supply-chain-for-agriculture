import { BaseContract }           from './base/base.contract'
import GiaoDichMuaBanLuaGiong     from "../abis/GiaoDichMuaBanLuaGiong.json"
const ADDRESS_GIAODICHMUABANLUAGIONG = process.env.ADDRESS_GIAODICHMUABANLUAGIONG || ""

export interface GiaoDichMuaBanLuaGiongInterface {
    intProperties:      number[],
    stringProperties:   string[]
}

export class GiaoDichMuaBanLuaGiongContract extends BaseContract {

    constructor() {
        super(GiaoDichMuaBanLuaGiong, ADDRESS_GIAODICHMUABANLUAGIONG)
    }

    addContract = async (data: GiaoDichMuaBanLuaGiongInterface, sender: string) => {
        const result = await this.methods.ThemGiaoDich(data.intProperties, data.stringProperties)
            ?.send({
                from: sender,
                gas: 3000000
            })
        return result
    }

    getContractById = async (id_contract: number) => {
        return await this.methods.DanhSachGiaoDichMuaBanLuaGiong(id_contract).call()
    }
}