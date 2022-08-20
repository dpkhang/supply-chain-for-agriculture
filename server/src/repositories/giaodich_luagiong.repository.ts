import { tbl_giaodich_luagiong } from "../entities/giaodich_luagiong.entity"; 
import { BaseRepository } from "./base/base.repository";

export class Giaodich_luagiongRepository extends BaseRepository {
    _giaodich_luagiongEntity
    
    constructor() {
        const giaodich_luagiongEntity = new tbl_giaodich_luagiong()
        super(giaodich_luagiongEntity)
        this._giaodich_luagiongEntity = giaodich_luagiongEntity
    }

    findById = async (id: number) => {
        return this.repos.findOne({
            where: { 
                id_giaodich_luagiong: id,
            },
        }).then(t=>t?.get())
    };
}