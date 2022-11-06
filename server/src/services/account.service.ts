import { BaseService } from "./base/base.service";
import { Account, AccountContract } from "../contracts/Account.contract";
import Wallet from "ethereumjs-wallet";
const blockchain_port = parseInt(process.env.PORT_BLOCKCHAIN || "8545");

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
    const password = "1234";

    if (blockchain_port == 8085) {
      //production
      const privateKey_import = privateKey.slice(2);
      console.log(privateKey_import);

      //store to database
      await this._accountContract.importRawKey({
          privateKey: privateKey_import,
          password: password
      });

      //tranfer eth
      this._accountContract.transferETH(address);

      const response = {
        address: address,
        publicKey: publicKey,
        privateKey: privateKey,
      };
      return response;
    }

    const response = {
      address: "0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1",
      publicKey: publicKey,
      privateKey: privateKey,
    };
    return response;
  };
}
