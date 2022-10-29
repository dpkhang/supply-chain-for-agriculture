import { Sender } from "../dtos/request/Sender.dto";
import { BaseContract } from "./base/base.contract";
import GiaoDichMuaBanSanPhamABI from "../abis/GiaoDichMuaBanSanPham.json";
const ADDRESS_GIAODICHMUABANSANPHAM =
  process.env.ADDRESS_GIAODICHMUABANSANPHAM || "";
const ADDRESS_LOHANGSANPHAM = process.env.ADDRESS_LOHANGSANPHAM || "";
export interface GiaoDichMuaBanSanPham {
  intProperties: number[];
  boolProperties: boolean[];
  loaiLoHang: boolean;
}

export class GiaoDichMuaBanSanPhamContract extends BaseContract {
  constructor() {
    super(GiaoDichMuaBanSanPhamABI, ADDRESS_GIAODICHMUABANSANPHAM);
  }

  addContract = async (data: GiaoDichMuaBanSanPham, sender: Sender) => {
    if (sender.password) {
      await this.web3.eth.personal.unlockAccount(
        sender.wallet,
        sender.password,
        5000
      );
    }

    const result = await this.methods
      .ThemGiaoDich(
        data.intProperties,
        data.boolProperties,
        [ADDRESS_LOHANGSANPHAM],
        data.loaiLoHang
      )
      ?.send({
        from: sender.wallet,
        gas: 3000000,
      });
    return result;
  };

  getContractById = async (id_contract: number) => {
    return await this.methods.DanhSachGiaoDich(id_contract).call();
  };
}
