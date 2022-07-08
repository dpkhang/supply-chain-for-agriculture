import { BaseContract } from './base/base.contract'
import VatTuSuDungABI                  from "../abis/VatTuSuDung.json"
const ADDRESS_VatTuSuDung           = process.env.ADDRESS_VatTuSuDung   || ""

export interface VatTuSuDung {
    id_VatTu:       number
    id_LoHangVatTu: number
    SoLuong:        number
    TenVatTu:       string
    ThoiGian:       string
}

export class VatTuSuDungContract extends BaseContract {

    constructor() {
        super(VatTuSuDungABI, ADDRESS_VatTuSuDung)
    }

    addContract = async (data: VatTuSuDung, sender: string) => {
        await this.methods.ThemVatTuNongNghiep(data)
            ?.send({
                from: sender,
                gas: 300000
            })
    }

    getContractById = async (id_contract: number) => {
        return await this.methods.ThemVatTuNongNghiep(id_contract)?.call()
    }
}