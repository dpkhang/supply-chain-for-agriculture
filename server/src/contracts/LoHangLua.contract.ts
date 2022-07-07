import Web3                         from "web3"
import LoHangLuaABI                from "../abis/LoHangLua.json"
const ADDRESS_LoHangLua             = process.env.ADDRESS_LoHangLua         || ""
const ACCOUNT_1                     = process.env.ACCOUNT_1                 || ""
const URL_BlockChain_NetWork        = process.env.URL_BlockChain_NetWork    || ""

export class LoHangLuaContract {
    web3: Web3
    contract: any

    constructor() {
        this.web3 = new Web3( URL_BlockChain_NetWork );

        this.contract = new this.web3.eth.Contract(
            ( LoHangLuaABI as any ).abi, 
            ADDRESS_LoHangLua
        );
    }
}