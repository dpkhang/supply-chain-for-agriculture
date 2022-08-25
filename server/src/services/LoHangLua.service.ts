import { BaseService } from "./base/base.service"; 
import { LoHangLuaContract } from "../contracts/LoHangLua.contract"; 
import { LohangluaRepository } from "../repositories/lohang_lua.repository";

export class LoHangLua_Service extends BaseService {
    //_giaodichmuaban_luaService
    private _lohangluaRepos

    constructor() {
       const loHangLuaRepos = new LohangluaRepository()
       super(loHangLuaRepos)
       this._lohangluaRepos = loHangLuaRepos
    }
}