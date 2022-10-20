import { tbl_nhacungcapvattu } from "../entities/nhacungcapvattu.entity"
import { BaseRepository } from "./base/base.repository"

export class NhacungcapvattuRepository extends BaseRepository {
    _nhacungcapvattuEntity: tbl_nhacungcapvattu

    constructor() {
        const nhacungcapvattu = new tbl_nhacungcapvattu()
        super(nhacungcapvattu)
        this._nhacungcapvattuEntity = nhacungcapvattu
    }

    findByIdUser = async (id_user: string|number) => {
        return this.repos.findOne({
            where: {
                id_user: id_user
            }
        }).then(t=>t?.get());;
    }
}