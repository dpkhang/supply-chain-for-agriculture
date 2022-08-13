import { BaseContract } from './base/base.contract'
import HoatDongNhatKyABI from "../abis/HoatDongNhatKy.json"
const ADDRESS_HOATDONGNHATKY = process.env.ADDRESS_HOATDONGNHATKY || ""

export interface NhatKyHoatDong {
    intProperties: number[] 
}

export class HoatDongNhatKyContract extends BaseContract {
    constructor() {
        super(HoatDongNhatKyABI, ADDRESS_HOATDONGNHATKY)
    }

    addContract = async (data: NhatKyHoatDong, sender: string) => {
        try {

            await this.methods.ThemHoatDongNhatKy(
                data.intProperties
            )?.send({
                from: sender,
                gas: 300000
            })
            
        } catch ( err ) {
            throw err
        }
    }

    getContractById = async (id_contract: number) => {
        return await this.methods.DanhSachHoatDongNhatKy(id_contract)?.call()
    }
}