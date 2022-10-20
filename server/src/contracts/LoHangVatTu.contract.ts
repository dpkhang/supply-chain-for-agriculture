import { BaseContract }             from './base/base.contract'
import LoHangVatTuABI               from "../abis/LoHangVatTu.json"
import { Sender } from '../dtos/request/Sender.dto'
const ADDRESS_LOHANGVATTU         = process.env.ADDRESS_LOHANGVATTU      || "0xd33080E9231098a70480Db5e4aaBA1B4aAEB6E22"

export interface LoHangVatTu {
    intProperties: number[],
    stringProperties: string[]
}

export class LoHangVatTuContract extends BaseContract{

    constructor() {
        super(LoHangVatTuABI, ADDRESS_LOHANGVATTU)
    }

    addContract = async (data: LoHangVatTu, sender: Sender) => {
        if (sender.password) {
            await this.web3.eth.personal.unlockAccount(sender.wallet, sender.password, 5000)
        }

        const result = await this.methods.ThemLohangVatTu(data.intProperties, data.stringProperties)
                             ?.send({
                                from: sender.wallet,
                                gas: 3000000
                             })
        return result
    }
    
    getContractById = async (id_contract: number) => {
        return await this.methods.DanhSachLoHangVatTu(id_contract).call()
    }
}