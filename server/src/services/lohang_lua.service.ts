import { BaseService } from "./base/base.service"; 
import { Lohang_luaRepository } from "../repositories/lohang_lua.repository"; 

export class LohangluaService extends BaseService {
    _lohangluaService

    constructor() {
        const lohang_lua = new Lohang_luaRepository()
        super(lohang_lua)
        this._lohangluaService = lohang_lua
    }
}