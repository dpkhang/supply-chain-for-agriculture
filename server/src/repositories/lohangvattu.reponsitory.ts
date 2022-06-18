import { tbl_lohang_vattu } from "../entities/lohang_vattu.entity"; 
import { BaseRepository } from "./base/base.repository";

export class LohangvattuRepository extends BaseRepository {
    _lohangvattuEntity
    
    constructor() {
        const lohangvattu = new tbl_lohang_vattu()
        super(lohangvattu)
        this._lohangvattuEntity = lohangvattu
    }
}