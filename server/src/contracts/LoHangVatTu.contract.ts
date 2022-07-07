import Web3                         from "web3"
import LoHangVatTuABI               from "../abis/LoHangVatTu.json"

const ADDRESS_LohangVatTu           = process.env.ADDRESS_LohangVatTu       || ""
const ACCOUNT_1                     = process.env.ACCOUNT_1                 || ""
const URL_BlockChain_NetWork        = process.env.URL_BlockChain_NetWork    || ""

export class LoHangVatTuContract {
    web3: Web3
    contract: any

    constructor() {
        this.web3 = new Web3( URL_BlockChain_NetWork );

        this.contract = new this.web3.eth.Contract(
            ( LoHangVatTuABI as any ).abi, 
            ADDRESS_LohangVatTu
        );
    }
}