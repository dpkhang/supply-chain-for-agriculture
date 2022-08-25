
import { BaseContract }   from './base/base.contract'
import LoHangLuaABI       from "../abis/LoHangLua.json"
const ADDRESS_LOHANGLUA = process.env.ADDRESS_LOHANGLUA || ""
const ADDRESS_NHATKYRUONGDONG = process.env.ADDRESS_NHATKYRUONGDONG || ""

export interface LoHangLua {
    intProperties: number[],
    stringProperties: string[]
}

export class LoHangLuaContract extends BaseContract {

    constructor() {
        super(LoHangLuaABI, ADDRESS_LOHANGLUA)
    }

    addContract = async (data: LoHangLua, sender: string) => {
        const result = await this.methods.ThemLoHangLua(data.intProperties, data.stringProperties)
        ?.send({
            from: sender,
            gas: 3000000
        })

        return result
    }

    getContractById = async (id_contract: number) => {
        return await this.methods.DanhSachLoHangLua(id_contract).call()
    }
}