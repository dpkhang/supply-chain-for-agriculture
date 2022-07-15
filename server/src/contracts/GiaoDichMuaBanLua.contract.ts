import { BaseContract }           from './base/base.contract'
import GiaoDichMuaBanLuaABI       from "../abis/GiaoDichMuaBanLua.json"
const ADDRESS_GIAODICHMUABANLUA = process.env.ADDRESS_GIAODICHMUABANLUA || ""
const ADDRESS_LOHANGLUA         = process.env.ADDRESS_LOHANGLUA || ""
export interface GiaoDichMuaBanLua {
    intProperties: number[],
    boolProperties: boolean[]
}

export class GiaoDichMuaBanLuaContract extends BaseContract {

    constructor() {
        super(GiaoDichMuaBanLuaABI, ADDRESS_GIAODICHMUABANLUA)
    }

    addContract = async (data: GiaoDichMuaBanLua, sender: string) => {
        const result = await this.methods.ThemGiaoDich(data.intProperties, data.boolProperties, [ADDRESS_LOHANGLUA])
            ?.send({
                from: sender,
                gas: 3000000
            })
        return result
    }

    getContractById = async (id_contract: number) => {
        return await this.methods.DanhSachGiaoDich(id_contract).call()
    }
}