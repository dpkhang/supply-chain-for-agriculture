import { BaseService } from "./base/base.service"; 
import { NhatkydongruongRepository } from "../repositories/nhatkydongruong.repository";
import { HoatdongnhatkyRepository } from "../repositories/hoatdongnhatky.repository";

export class NhatkydongruongService extends BaseService {
    _nhatkydongruongService

    constructor() {
        const nhatkydongruongService = new NhatkydongruongRepository()
        super(nhatkydongruongService)
        this._nhatkydongruongService = nhatkydongruongService
    }

    findAllData = () => {
        return this._repos.findAllData()
    }
}