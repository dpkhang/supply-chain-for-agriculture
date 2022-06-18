import { BaseService } from "./base/base.service"; 
import { Giaodichmuaban_luaRepository } from "../repositories/giaodichmuaban_lua.repository"; 

export class Giaodichmuaban_luaService extends BaseService {
    _giaodichmuaban_luaService

    constructor() {
        const giaodichmuaban_lua = new Giaodichmuaban_luaRepository()
        super(giaodichmuaban_lua)
        this._giaodichmuaban_luaService = giaodichmuaban_lua
    }
}