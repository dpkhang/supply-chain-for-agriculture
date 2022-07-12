
import { BaseContract }   from './base/base.contract'
import LoHangLuaABI       from "../abis/LoHangLua.json"
const ADDRESS_LoHangLua = process.env.ADDRESS_LoHangLua || ""
const ADDRESS_NHATKYRUONGDONG = process.env.ADDRESS_NHATKYRUONGDONG || ""

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