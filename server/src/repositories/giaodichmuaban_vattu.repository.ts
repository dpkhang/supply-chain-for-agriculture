import { tbl_giaodichmuaban_vattu } from "../entities/giaodichmuaban_vattu.entity"; 
import { BaseRepository } from "./base/base.repository";

export class Giaodichmuaban_vattuRepository extends BaseRepository {
    _giaodichmuaban_vattuEntity
    
    constructor() {
        const giaodichmuaban_vattu = new tbl_giaodichmuaban_vattu()
        super(giaodichmuaban_vattu)
        this._giaodichmuaban_vattuEntity = giaodichmuaban_vattu
    }
}