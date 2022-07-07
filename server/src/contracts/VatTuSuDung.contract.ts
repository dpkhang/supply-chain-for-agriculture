import Web3                         from "web3"
import VatTuSuDung                  from "../abis/VatTuSuDung.json"

const ADDRESS_VatTuSuDung           = process.env.ADDRESS_VatTuSuDung   || ""
const ACCOUNT_1                     = process.env.ACCOUNT_1                 || ""
const URL_BlockChain_NetWork        = process.env.URL_BlockChain_NetWork    || ""

export class VatTuSuDungContract {
    web3: Web3
    contract: any

    constructor() {
        this.web3 = new Web3( URL_BlockChain_NetWork );

        this.contract = new this.web3.eth.Contract(
            ( VatTuSuDung as any ).abi, 
            ADDRESS_VatTuSuDung
        );
    }
}