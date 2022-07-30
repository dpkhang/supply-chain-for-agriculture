import { tbl_hoatdongmuavu } from "../entities/hoatdongmuavu.entity";
import { BaseRepository } from "./base/base.repository";

export class HoatdongmuavuRepository extends BaseRepository {
    _hoatdongmuavuEntity: tbl_hoatdongmuavu

    constructor() {
        const hoatdongmuavu = new tbl_hoatdongmuavu()
        super(hoatdongmuavu)
        this._hoatdongmuavuEntity = hoatdongmuavu
    }
}