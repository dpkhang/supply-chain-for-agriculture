import Web3                         from "web3"
import NhatKyDongRuong              from "../abis/NhatKyDongRuong.json"

const ADDRESS_NhatKyDongRuong       = process.env.ADDRESS_NhatKyDongRuong   || ""
const ACCOUNT_1                     = process.env.ACCOUNT_1                 || ""
const URL_BlockChain_NetWork        = process.env.URL_BlockChain_NetWork    || ""

export class NhatKyDongRuongContract {
    web3: Web3
    contract: any

    constructor() {
        this.web3 = new Web3( URL_BlockChain_NetWork );

        this.contract = new this.web3.eth.Contract(
            ( NhatKyDongRuong as any ).abi, 
            ADDRESS_NhatKyDongRuong
        );
    }
}