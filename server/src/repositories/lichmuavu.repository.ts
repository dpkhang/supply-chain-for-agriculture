import { BaseRepository } from "./base/base.repository";
import { tbl_lichmuavu } from "../entities/lichmuavu.entity";
import { GiongluaRepository } from "./gionglua.repository";

export class LichmuavuRepository extends BaseRepository {
    _lichmuavuEntity: tbl_lichmuavu

    constructor() {
        const lichmuavu = new tbl_lichmuavu()
        super(lichmuavu)
        this._lichmuavuEntity = lichmuavu
    }
}