import { tbl_vattusudung } from "../entities/vattusudung.entity";
import { BaseRepository } from "./base/base.repository";

export class VattusudungRepository extends BaseRepository {
    _vattusudungEntity: tbl_vattusudung

    constructor() {
        const vattusudung = new tbl_vattusudung()
        super(vattusudung)
        this._vattusudungEntity = vattusudung
    }
}