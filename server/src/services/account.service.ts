import { BaseService } from "./base/base.service"
import { Account, AccountContract } from "../contracts/Account.contract"

export class Account_Service {
    _accountContract

    constructor() {
        this._accountContract = new AccountContract()
    }

    importRawKey = async (account: Account) => {
        return await this._accountContract.importRawKey(account)
    }
}