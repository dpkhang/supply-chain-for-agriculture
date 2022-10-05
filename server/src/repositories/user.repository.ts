import { tbl_user } from "../entities/user.entity";
import { BaseRepository } from "./base/base.repository";
import { NhacungcapvattuRepository } from "./nhacungcapvattu.repository";
import { ThuonglaiRepository } from "./thuonglai.repository";
import { XavienRepository } from "./xavien.repository";

export class UserRepository extends BaseRepository {
    _userEntity: tbl_user
    private _xaVienRepository
    private _thuongLaiRepository
    private _nhaCungCapVatTuRepository

    constructor() {
        const user = new tbl_user()
        super(user)
        this._userEntity = user

        this._xaVienRepository = new XavienRepository();
        this._thuongLaiRepository = new ThuonglaiRepository();
        this._nhaCungCapVatTuRepository = new NhacungcapvattuRepository();
    }

    findUserByUserName = async (username: string) => {
        return this.repos.findOne({
            where: { 
                username: username,
            },
        }).then(t=>t?.get())
    }
}