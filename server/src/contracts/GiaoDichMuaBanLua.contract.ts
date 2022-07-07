import Web3                         from "web3"
import GiaoDichMuaBanLuaABI         from "../abis/GiaoDichMuaBanLua.json"
const ADDRESS_GiaoDichMuaBanLua     = process.env.ADDRESS_GiaoDichMuaBanLua || ""
const ACCOUNT_1                     = process.env.ACCOUNT_1                 || ""
const URL_BlockChain_NetWork        = process.env.URL_BlockChain_NetWork    || ""

export class GiaoDichMuaBanLuaContract {
    web3: Web3
    contract: any

    constructor() {
        this.web3 = new Web3( URL_BlockChain_NetWork );

        this.contract = new this.web3.eth.Contract(
            ( GiaoDichMuaBanLuaABI as any ).abi, 
            ADDRESS_GiaoDichMuaBanLua
        );
    }
}