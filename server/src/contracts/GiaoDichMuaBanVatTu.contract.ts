import { BaseContract }             from './base/base.contract'
import GiaoDichMuaBanVatTuABI       from "../abis/GiaoDichMuaBanVatTu.json"
const ADDRESS_GIAODICHMUABANVATTU   = process.env.ADDRESS_GIAODICHMUABANVATTU || "0x4444bf05112624b1AA983010aF979ab17D5a92B2"
const ADDRESS_LOHANGVATTU           = process.env.ADDRESS_LOHANGVATTU || "0xd33080E9231098a70480Db5e4aaBA1B4aAEB6E22"

export interface GiaoDichMuaBanVatTu {
    intProperties: number[],
    boolProperties: boolean[],
}

export class GiaoDichMuaBanVatTuContract extends BaseContract {

    constructor() {
        super(GiaoDichMuaBanVatTuABI, ADDRESS_GIAODICHMUABANVATTU)
    }

    addContract = async (data: GiaoDichMuaBanVatTu, sender: string) => {
        const result = await this.methods.ThemGiaoDich(data.intProperties, data.boolProperties, [ADDRESS_LOHANGVATTU])
        ?.send({
            from: sender,
            gas: 3000000
        })
        return result
    }
   
    getContractById = async (id_contract: number) => {
        return await this.methods.DanhSachGiaoDich(id_contract).call()
    }
}