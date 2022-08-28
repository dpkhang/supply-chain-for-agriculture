import { tbl_lohang_lua } from "../entities/lohanglua.entity"; 
import { BaseRepository } from "./base/base.repository";

export class lohangluaRepository extends BaseRepository {
    _lohang_luaEntity
    
    constructor() {
        const lohang_luaEntity = new tbl_lohang_lua()
        super(lohang_luaEntity)
        this._lohang_luaEntity = lohang_luaEntity
    }

    findById = async (id: number) => {
        return this.repos.findOne({
            where: { 
                id_lohang_lua: id,
            },
        }).then(t=>t?.get())
    };
}