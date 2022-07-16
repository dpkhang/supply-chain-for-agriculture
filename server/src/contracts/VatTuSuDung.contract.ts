import { BaseContract }             from './base/base.contract'
import VatTuSuDungABI               from "../abis/VatTuSuDung.json"
const ADDRESS_VATTUSUDUNG           = process.env.ADDRESS_VATTUSUDUNG   || ""

export interface VatTuSuDung {
    id_VatTuSuDung      : number
    id_HoatDongNhatKy   : number
    id_VatTu            : number
    id_LoHangVatTu      : number
    ThoiGianVatTu       : number
    TenVatTu            : string
}

export interface VatTuSuDungProperties {
    intProperties       : number[]
    stringProperties    : string[]
    addressProperties   : string[]
}

export class VatTuSuDungContract extends BaseContract {

    constructor() {
        super(VatTuSuDungABI, ADDRESS_VATTUSUDUNG)
    }

    addContract = async (data: VatTuSuDungProperties, sender: string) => {
        try {
            await this.methods.ThemVatTuNongNghiep(
                data.intProperties,
                data.stringProperties,
                data.addressProperties
            )
            ?.send({
                from: sender,
                gas: 300000
            })
        } catch ( err ) {
            throw err
        }
    }

    getContractById = async (id_contract: number) => {
        return await this.methods.DanhSachVatTuSuDung(id_contract)?.call()
    }
}