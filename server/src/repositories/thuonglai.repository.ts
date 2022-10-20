import { tbl_thuonglai } from "../entities/thuonglai.entity";
import { BaseRepository } from "./base/base.repository";

export class ThuonglaiRepository extends BaseRepository { 
    _thuonglaiEntity: tbl_thuonglai

    constructor() {
        const thuonglai = new tbl_thuonglai()
        super(thuonglai)
        this._thuonglaiEntity = thuonglai
    }

    findByIdUser = async (id_user: string|number) => {
        return this.repos.findOne({
            where: {
                id_user: id_user
            }
        }).then(t=>t?.get());
    }
}