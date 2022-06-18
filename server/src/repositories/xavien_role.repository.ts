import { xavien_role } from "../entities/xavien_role.entity";
import { BaseRepository } from "./base/base.repository";

export class XavienRoleRepository extends BaseRepository {
    _xavienrole
    
    constructor() {
        const xavienRole = new xavien_role()
        super(xavienRole)
        this._xavienrole = xavienRole
    }
}