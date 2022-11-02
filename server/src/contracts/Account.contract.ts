import { BaseContract } from "./base/base.contract";

export interface Account {
  privateKey: string;
  password: string;
}

export class AccountContract extends BaseContract {
  constructor() {
    super(null, "");
  }

  importRawKey = async (account: Account) => {
    try {
      return await this.web3.eth.personal.importRawKey(
        account.privateKey,
        account.password
      );
    } catch (err: any) {
      throw err;
    }
  };

  transferETH = async (address: string) => {
    try {
      const sender = process.env.SENDER_ADDRESS;

      if (sender) {
        await this.web3.eth.personal.unlockAccount(sender, "1234", 5000);
        await this.web3.eth.sendTransaction({
          to: address,
          from: sender,
          value: this.web3.utils.toWei("50", "ether"),
        });
        return true;
      }
      
      return false;
    } catch (err: any) {
      throw err;
    }
  };
}
