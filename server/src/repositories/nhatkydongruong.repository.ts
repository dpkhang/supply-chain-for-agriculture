import { Model, ModelType } from "sequelize/types";
import { tbl_chitietphanbonthuocbaove } from "../entities/chitietphanbonthuocbaove.entity";
import { tbl_danhgiacuoimua } from "../entities/danhgiacuoimua.entity";
import { tbl_hoatdongnhatky } from "../entities/hoatdongnhatky.entity";
import { tbl_nhatkydongruong } from "../entities/nhatkydongruong.entity";
import { BaseRepository } from "./base/base.repository";

export class NhatkydongruongRepository extends BaseRepository {
    _nhatkydongruongEntity
    
    constructor() {
        const nhatkydongruong = new tbl_nhatkydongruong()
        super(nhatkydongruong)
        this._nhatkydongruongEntity = nhatkydongruong
    }

    findAllData = async () => {
        //test
        const hoatdongnhatkyEntity = new tbl_hoatdongnhatky();
        const hoatdongnhatkyModel = new BaseRepository(hoatdongnhatkyEntity)

        const chitietphanbonthuocbaove = new tbl_chitietphanbonthuocbaove();
        const chitietphanbonthuocbaoveModel = new BaseRepository(chitietphanbonthuocbaove)

        const danhgiacuoimua = new tbl_danhgiacuoimua();
        const danhgiacuoimuaModel = new BaseRepository(danhgiacuoimua)

        return danhgiacuoimuaModel.repos.findAll({
            include: [
                // hoatdongnhatkyModel.repos,
                // chitietphanbonthuocbaoveModel.repos,
                // danhgiacuoimuaModel.repos
            ]
        });
    }
}