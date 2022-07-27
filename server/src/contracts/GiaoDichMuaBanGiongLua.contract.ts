import { BaseContract }           from './base/base.contract'
import GiaoDichMuaBanGiongLua     from "../abis/GiaoDichMuaBanGiongLua.json"
const ADDRESS_GIAODICHMUABANGIONGLUA = process.env.ADDRESS_GIAODICHMUABANGIONGLUA || ""

export interface GiaoDichMuaBanGiongLuaInterface {
    intProperties: number[],
    stringProperties: string[]
}

export class GiaoDichMuaBanGiongLuaContract extends BaseContract {

    constructor() {
        super(GiaoDichMuaBanGiongLua, ADDRESS_GIAODICHMUABANGIONGLUA)
    }

    addContract = async (data: GiaoDichMuaBanGiongLuaInterface, sender: string) => {
        const result = await this.methods.ThemGiaoDich(data.intProperties, data.stringProperties)
            ?.send({
                from: sender,
                gas: 3000000
            })
        return result
    }

    getContractById = async (id_contract: number) => {
        return await this.methods.DanhSachGiaoDichMuaBanGiongLua(id_contract).call()
    }
}