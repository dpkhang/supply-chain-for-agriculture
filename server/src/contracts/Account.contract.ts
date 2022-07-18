import { BaseContract } from './base/base.contract'

export interface Account {
   privateKey   : string
   password     : string
}

export class AccountContract extends BaseContract {
    constructor() {
        super(null, "")
    }

    importRawKey = async (account: Account) => {
       return await this.web3.eth.personal.importRawKey(account.privateKey, account.password)
    }
}