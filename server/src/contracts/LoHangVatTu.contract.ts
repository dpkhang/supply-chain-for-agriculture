import { BaseContract }             from './base/base.contract'
import LoHangVatTuABI               from "../abis/LoHangVatTu.json"
const ADDRESS_LOHANGVATTU         = process.env.ADDRESS_LOHANGVATTU      || "0xd33080E9231098a70480Db5e4aaBA1B4aAEB6E22"

export interface LoHangVatTu {
    intProperties: number[],
    stringProperties: string[]
}

export class LoHangVatTuContract extends BaseContract{

    constructor() {
        super(LoHangVatTuABI, ADDRESS_LOHANGVATTU)
    }

    addContract = async (data: LoHangVatTu, sender: string) => {
        const result = await this.methods.ThemLohangVatTu(data.intProperties, data.stringProperties)
                             ?.send({
                                from: sender,
                                gas: 3000000
                             })
        return result
    }
    
    getContractById = async (id_contract: number) => {
        return await this.methods.DanhSachLoHangVatTu(id_contract).call()
    }
}