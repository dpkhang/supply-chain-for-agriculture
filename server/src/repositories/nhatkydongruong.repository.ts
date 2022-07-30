import { tbl_nhatkydongruong } from "../entities/nhatkydongruong.entity";
import { BaseRepository } from "./base/base.repository";

export class NhatkydongruongRepository extends BaseRepository {
    _nhatkydongruongEntity: tbl_nhatkydongruong

    constructor() {
        const nhatkydongruong = new tbl_nhatkydongruong()
        super(nhatkydongruong)
        this._nhatkydongruongEntity = nhatkydongruong
    }
}