import { tbl_khovattu } from "../entities/khovattu.entity";
import { BaseRepository } from "./base/base.repository";

export class KhovattuRepository extends BaseRepository {
    _khovattuEntity
    
    constructor() {
        const khohangvattu = new tbl_khovattu()
        super(khohangvattu)
        this._khovattuEntity = khohangvattu
    }
}