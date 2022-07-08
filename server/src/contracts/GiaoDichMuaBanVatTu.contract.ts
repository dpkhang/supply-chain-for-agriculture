import { BaseContract }             from './base/base.contract'
import GiaoDichMuaBanVatTuABI       from "../abis/GiaoDichMuaBanVatTu.json"
const ADDRESS_GiaoDichMuaBanVatTu   = process.env.ADDRESS_GiaoDichMuaBanVatTu || ""
const URL_BlockChain_NetWork        = process.env.URL_BlockChain_NetWork    || ""

export interface GiaoDichMuaBanVatTu {
    id_GiaoDich:      number
    id_XaVien:        number
    id_NhaCungCap:    number
    id_LoHangVatTu:   number
    thoigianGiaoDich: string
    giaLoHang:        number
}

export class GiaoDichMuaBanVatTuContract extends BaseContract {

    constructor() {
        super(GiaoDichMuaBanVatTuABI, ADDRESS_GiaoDichMuaBanVatTu)
    }

    addContract = async (data: GiaoDichMuaBanVatTu, sender: string) => {
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