import { tbl_giaodichmuaban_lua } from "../entities/giaodichmuaban_lua.entity"; 
import { BaseRepository } from "./base/base.repository";

export class Giaodichmuaban_luaRepository extends BaseRepository {
    _giaodichmuaban_luaEntity
    
    constructor() {
        const giaodichmuaban_luaEntity = new tbl_giaodichmuaban_lua()
        super(giaodichmuaban_luaEntity)
        this._giaodichmuaban_luaEntity = giaodichmuaban_luaEntity
    }
}