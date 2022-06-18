import { tbl_danhgiacuoimua } from "../entities/danhgiacuoimua.entity";
import { BaseRepository } from "./base/base.repository";

export class DanhgiacuoimuaRepository extends BaseRepository {
    _danhgiacuoimuaEntity
    
    constructor() {
        const danhgiacuoimua = new tbl_danhgiacuoimua()
        super(danhgiacuoimua)
        this._danhgiacuoimuaEntity = danhgiacuoimua
    }
}