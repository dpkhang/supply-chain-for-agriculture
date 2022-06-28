import { xavienCreateDto } from '../dtos/xavien.dto';
import { tbl_xavien } from './../entities/xavien.entity';
import { BaseRepository } from "./base/base.repository";

export class XavienRepository extends BaseRepository {
    _xavienEntity
    
    constructor() {
        const xavien = new tbl_xavien()
        super(xavien)
        this._xavienEntity = xavien
    }

    register = async (xavien: xavienCreateDto) => {
        try {
            return await this.repos.create({...xavien});
        } catch (err) {
            throw err
        }
    }
}