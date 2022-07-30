import { tbl_thuadat } from "../entities/thuadat.entity";
import { BaseRepository } from "./base/base.repository";

export class ThuadatRepository extends BaseRepository {
    _thuadatEntity: tbl_thuadat

    constructor() {
        const thuadat = new tbl_thuadat()
        super(thuadat)
        this._thuadatEntity = thuadat
    }
}