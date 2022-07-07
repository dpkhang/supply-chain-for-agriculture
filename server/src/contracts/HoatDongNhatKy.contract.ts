import Web3                         from "web3"
import HoatDongNhatKy               from "../abis/HoatDongNhatKy.json"

const ADDRESS_HoatDongNhatKy        = process.env.ADDRESS_HoatDongNhatKy    || ""
const ACCOUNT_1                     = process.env.ACCOUNT_1                 || ""
const URL_BlockChain_NetWork        = process.env.URL_BlockChain_NetWork    || ""

export class HoatDongNhatKyContract {
    web3: Web3
    contract: any

    constructor() {
        this.web3 = new Web3( URL_BlockChain_NetWork );

        this.contract = new this.web3.eth.Contract(
            ( HoatDongNhatKy as any ).abi, 
            ADDRESS_HoatDongNhatKy
        );
    }
}