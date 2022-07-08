import { BaseContract } from './base/base.contract';
import Web3                         from "web3"
import LoHangVatTuABI               from "../abis/LoHangVatTu.json"
const ADDRESS_LohangVatTu           = process.env.ADDRESS_LohangVatTu       || ""

export interface LoVatTu {
    id_LoHangVatTu:   number
    id_MuaVu:         number
    id_VatTu:         number
    tenVatTu:         string
    thoigianLoHang:   string
    soluong:          number
}

export class LoHangVatTuContract extends BaseContract{

    constructor() {
        super(LoHangVatTuABI, ADDRESS_LohangVatTu)
    }

    addContract = async (data: LoVatTu, sender: string) => {
        await this.methods.ThemGiaoDich(data)
                             ?.send({
                                from: sender,
                                gas: 3000000
                             })
    }
    
    getContractById = async (id_contract: number) => {
        return await this.methods.DanhSachGiaoDich(id_contract).call()
    }
}