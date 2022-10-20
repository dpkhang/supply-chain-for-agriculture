import { BaseContract } from './base/base.contract';
const GiaoDichMuaBanSanPhamABI      = '../abis/GiaoDichMuaBanSanPham.json';
const ADDRESS_GIAODICHMUABANSANPHAM = process.env.ADDRESS_GIAODICHMUABANSANPHAM || "" 
export interface GiaoDichMuaBanSanPham {
    intProperties: number[],
    boolProperties: boolean[],
    addressProperties: string[],
    loaiLoHang: boolean
}

export class GiaoDichMuaBanSanPhamContract extends BaseContract {
    constructor() {
        super(GiaoDichMuaBanSanPhamABI, ADDRESS_GIAODICHMUABANSANPHAM);
    }

    addContract = async (data: GiaoDichMuaBanSanPham, sender: string) => {
        const result = await this.methods.ThemGiaoDich(data.intProperties, data.boolProperties, data.addressProperties, data.loaiLoHang)
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