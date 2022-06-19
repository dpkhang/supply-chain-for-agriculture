import { tbl_lohang_lua } from "../entities/lohang_lua.entity";
import { BaseRepository } from "./base/base.repository";

export class Lohang_luaRepository extends BaseRepository {
    _lohang_luaEntity
    
    constructor() {
        const lohang_lua = new tbl_lohang_lua()
        super(lohang_lua)
        this._lohang_luaEntity = lohang_lua
    }
}