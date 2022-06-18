import { tbl_hoatdongnhatky } from "../entities/hoatdongnhatky.entity";
import { BaseRepository } from "./base/base.repository";

export class HoatdongnhatkyRepository extends BaseRepository {
    _hoatdongnhatkyEntity
    
    constructor() {
        const hoatdongnhatky = new tbl_hoatdongnhatky()
        super(hoatdongnhatky)
        this._hoatdongnhatkyEntity = hoatdongnhatky
    }
}