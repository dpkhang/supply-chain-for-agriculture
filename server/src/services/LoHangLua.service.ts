import { BaseService } from "./base/base.service"; 
import { LoHangLuaContract } from "../contracts/LoHangLua.contract"; 

export class LoHangLua_Service extends BaseService {
    //_giaodichmuaban_luaService
    private _LoHangLua_Service: LoHangLuaContract

    constructor() {
       const loHangLuaContract = new LoHangLuaContract()
       super(loHangLuaContract)
       this._LoHangLua_Service = loHangLuaContract
    }
}