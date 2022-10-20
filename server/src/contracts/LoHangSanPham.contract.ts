import { BaseContract } from './base/base.contract';
const LoHangSanPhamABI = '../abis/LoHangSanPham.json'
const ADDRESS_LOHANGSANPHAM = process.env.ADDRESS_LOHANGSANPHAM || "";

export interface LoHangSanPham {
    intProperties: number[]
}

export class LoHangSanPhamContract extends BaseContract {
    constructor () {
        super(LoHangSanPhamABI ,ADDRESS_LOHANGSANPHAM);
    }

    addContract = async (data: LoHangSanPham, sender: string) => {
        const result = await this.methods.ThemLoHangSanPham(data.intProperties)
            ?.send({
                from: sender,
                gas: 3000000
            })
        return result
    }

    getContractById = async (id_contract: number) => {
        return await this.methods.DanhSachLoHangSanPham(id_contract).call()
    }
}