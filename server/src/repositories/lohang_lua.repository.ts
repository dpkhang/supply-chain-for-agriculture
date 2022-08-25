import { tbl_lohang_lua } from "../entities/lohanglua";
import { BaseRepository } from "./base/base.repository";
import { Giaodichmuaban_luaRepository } from "./giaodichmuaban_lua.repository";
import { LichmuavuRepository } from "./lichmuavu.repository";

export class LohangluaRepository extends BaseRepository {
    _lohang_luaEntity
    
    constructor() {
        const lohang_luaEntity = new tbl_lohang_lua
        super(lohang_luaEntity)
        this._lohang_luaEntity = lohang_luaEntity
    }
}