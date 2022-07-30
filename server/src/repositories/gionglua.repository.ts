import { tbl_gionglua } from "../entities/gionglua.entity";
import { BaseRepository } from "./base/base.repository";

export class GiongluaRepository extends BaseRepository {
    _giongluaEntity: tbl_gionglua

    constructor() {
        const gionglua = new tbl_gionglua()
        super(gionglua)
        this._giongluaEntity = gionglua
    }
}