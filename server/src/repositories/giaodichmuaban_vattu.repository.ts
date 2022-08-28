import { tbl_giaodichmuaban_vattu } from "../entities/giaodichmuaban_vattu.entity";
import { BaseRepository } from "./base/base.repository";

export class Giaodichmuaban_vattuRepositoty extends BaseRepository {
    _giaodichmuaban_vattuEntity

    constructor() {
        const giaodichmuaban_vattuEntity = new tbl_giaodichmuaban_vattu()
        super(giaodichmuaban_vattuEntity)
        this._giaodichmuaban_vattuEntity = giaodichmuaban_vattuEntity
    }

    findById = async (id: number) => {
        return this.repos.findOne({
            where: { 
                id_giaodichmuaban_vattu: id,
            },
        }).then(t=>t?.get())
    };
}