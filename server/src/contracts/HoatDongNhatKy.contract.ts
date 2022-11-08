import { BaseContract } from "./base/base.contract";
import HoatDongNhatKyABI from "../abis/HoatDongNhatKy.json";
import { Sender } from "../dtos/request/Sender.dto";
const ADDRESS_HOATDONGNHATKY = process.env.ADDRESS_HOATDONGNHATKY || "";

export interface NhatKyHoatDong {
  intProperties: number[];
  boolProperties: boolean[]
}

export class HoatDongNhatKyContract extends BaseContract {
  constructor() {
    super(HoatDongNhatKyABI, ADDRESS_HOATDONGNHATKY);
  }

  addContract = async (data: NhatKyHoatDong, sender: Sender) => {
    try {
      if (sender.password) {
        await this.web3.eth.personal.unlockAccount(
          sender.wallet,
          sender.password,
          5000
        );
      }

      await this.methods.ThemHoatDongNhatKy(data.intProperties, data.boolProperties)?.send({
        from: sender.wallet,
        gas: 300000,
      });
    } catch (err) {
      throw err;
    }
  };

  getContractById = async (id_contract: number) => {
    try {
      return await this.methods.DanhSachHoatDongNhatKy(id_contract)?.call();
    } catch (err: any) {
      throw err;
    }
  };
}
