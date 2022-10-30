import { BaseService } from "./base/base.service";
import { Account, AccountContract } from "../contracts/Account.contract";
import Wallet from "ethereumjs-wallet";

export class Account_Service {
  _accountContract;

  constructor() {
    this._accountContract = new AccountContract();
  }

  importRawKey = async (account: Account) => {
    return await this._accountContract.importRawKey(account);
  };

  createWallet = async () => {
    //generate
    const wallet = Wallet.generate();
    const address = wallet.getAddressString();
    const publicKey = wallet.getPublicKeyString();
    const privateKey = wallet.getPrivateKeyString();
    const password = '1234';

    //store to database
    await this._accountContract.importRawKey({
        privateKey: privateKey,
        password: password
    });

    //tranfer eth
    this._accountContract.transferETH(address);

    //store to database
  };
}
