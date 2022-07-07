import Web3                         from "web3"
import GiaoDichMuaBanVatTuABI       from "../abis/GiaoDichMuaBanVatTu.json"
const ADDRESS_GiaoDichMuaBanVatTu   = process.env.ADDRESS_GiaoDichMuaBanVatTu || ""
const ACCOUNT_1                     = process.env.ACCOUNT_1                 || ""
const URL_BlockChain_NetWork        = process.env.URL_BlockChain_NetWork    || ""

export class GiaoDichMuaBanVatTuContract {
    web3: Web3
    contract: any

    constructor() {
        this.web3 = new Web3( URL_BlockChain_NetWork );

        this.contract = new this.web3.eth.Contract(
            ( GiaoDichMuaBanVatTuABI as any ).abi, 
            ADDRESS_GiaoDichMuaBanVatTu
        );
    }
}