import { tbl_category_vattu } from "../entities/category_vattu.entity"; 
import { BaseRepository } from "./base/base.repository";

export class Category_vattu_luaRepository extends BaseRepository {
    _category_vattu_luaEntity
    
    constructor() {
        const category_vattu_luaEntity = new tbl_category_vattu()
        super(category_vattu_luaEntity)
        this._category_vattu_luaEntity = category_vattu_luaEntity
    }
}