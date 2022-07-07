import { BaseService } from "./base/base.service"; 
import { GiaoDichMuaBanLuaContract } from "../contracts/GiaoDichMuaBanLua.contract";

export class GiaiDichMuaBanLua_Service extends BaseService {
    //_giaodichmuaban_luaService
    private _GiaoDichMuaBanLuaContract: GiaoDichMuaBanLuaContract

    constructor() {
       const giaoDichMuaBanLuaContract = new GiaoDichMuaBanLuaContract()
       super(giaoDichMuaBanLuaContract)
       this._GiaoDichMuaBanLuaContract = giaoDichMuaBanLuaContract
    }
}