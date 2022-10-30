import { BaseContract } from "./base/base.contract";
import LoHangLuaABI from "../abis/LoHangLua.json";
import { Sender } from "../dtos/request/Sender.dto";
const ADDRESS_LOHANGLUA = process.env.ADDRESS_LOHANGLUA || "";
const ADDRESS_NHATKYRUONGDONG = process.env.ADDRESS_NHATKYRUONGDONG || "";

export interface LoHangLua {
  intProperties: number[];
  stringProperties: string[];
}

export class LoHangLuaContract extends BaseContract {
  constructor() {
    super(LoHangLuaABI, ADDRESS_LOHANGLUA);
  }

  addContract = async (data: LoHangLua, sender: Sender) => {
    try {
      if (sender.password) {
        await this.web3.eth.personal.unlockAccount(
          sender.wallet,
          sender.password,
          5000
        );
      }

      const result = await this.methods
        .ThemLoHangLua(data.intProperties, data.stringProperties)
        ?.send({
          from: sender.wallet,
          gas: 3000000,
        });

      return result;
    } catch (err: any) {
      throw err;
    }
  };

  getContractById = async (id_contract: number) => {
    try {
      return await this.methods.DanhSachLoHangLua(id_contract).call();
    } catch (err: any) {
      throw err;
    }
  };
}
