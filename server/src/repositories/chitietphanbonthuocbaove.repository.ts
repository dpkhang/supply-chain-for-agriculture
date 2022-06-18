import { tbl_chitietphanbonthuocbaove } from "../entities/chitietphanbonthuocbaove.entity";
import { BaseRepository } from "./base/base.repository";

export class ChitietphanbonthuocbaoveRepository extends BaseRepository {
    _chitietphanbonthuocbaoveEntity
    
    constructor() {
        const chitietphanbonthuocbaove = new tbl_chitietphanbonthuocbaove()
        super(chitietphanbonthuocbaove)
        this._chitietphanbonthuocbaoveEntity = chitietphanbonthuocbaove
    }
}