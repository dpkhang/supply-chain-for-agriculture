import { tbl_nhacungcapvattu } from "../entities/nhacungcapvattu.entity";
import { BaseRepository } from "./base/base.repository";

export class NhacungcapvattuRepository extends BaseRepository {
    _nhacungcapvattuEntity
    
    constructor() {
        const nhacungcapvattu = new tbl_nhacungcapvattu()
        super(nhacungcapvattu)
        this._nhacungcapvattuEntity = nhacungcapvattu
    }
}