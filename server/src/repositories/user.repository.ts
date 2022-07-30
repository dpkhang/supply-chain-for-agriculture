import { tbl_user } from "../entities/user.entity";
import { BaseRepository } from "./base/base.repository";

export class UserRepository extends BaseRepository {
    _userEntity: tbl_user

    constructor() {
        const user = new tbl_user()
        super(user)
        this._userEntity = user
    }
}