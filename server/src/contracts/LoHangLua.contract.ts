
import { BaseContract }   from './base/base.contract'
import LoHangLuaABI       from "../abis/LoHangLua.json"
const ADDRESS_LoHangLua = process.env.ADDRESS_LoHangLua || "0x2b2B29eE26D155bcdE82AafEfd301a8d89d57839"
const ADDRESS_NHATKYRUONGDONG = process.env.ADDRESS_NHATKYRUONGDONG || "0x6dF67eacC7d7500C66f1a0E993Efb117563918fb"

export interface LoHangLua {
    intProperties: number[],
    stringProperties: string[]
}

export class LoHangLuaContract extends BaseContract {

    constructor() {
        super(LoHangLuaABI, ADDRESS_LoHangLua)
    }

    addContract = async (data: LoHangLua, sender: string) => {
        const result = this.methods.ThemLoHangLua(data.intProperties, [ADDRESS_NHATKYRUONGDONG], data.stringProperties)
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