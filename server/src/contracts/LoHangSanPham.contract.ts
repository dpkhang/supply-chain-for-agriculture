import { Sender } from "./../dtos/request/Sender.dto";
import { BaseContract } from "./base/base.contract";
import LoHangSanPhamABI from "../abis/LoHangSanPham.json";
const ADDRESS_LOHANGSANPHAM = process.env.ADDRESS_LOHANGSANPHAM || "";

export interface LoHangSanPham {
  intProperties: number[];
}

export class LoHangSanPhamContract extends BaseContract {
  constructor() {
    console.log(ADDRESS_LOHANGSANPHAM);
    super(LoHangSanPhamABI, ADDRESS_LOHANGSANPHAM);
  }

  addContract = async (data: LoHangSanPham, sender: Sender) => {
    console.log(sender)
    if (sender.password) {
      await this.web3.eth.personal.unlockAccount(
        sender.wallet,
        sender.password,
        5000
      );
    }
    console.log(data.intProperties)
    const result = await this.methods
      .ThemLoHangSanPham(data.intProperties)
      ?.send({
        from: sender.wallet,
        gas: 3000000,
      });
    return result;
  };

  getContractById = async (id_contract: number) => {
    return await this.methods.DanhSachLoHangSanPham(id_contract).call();
  };
}
