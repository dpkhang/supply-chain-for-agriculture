import { BaseService } from "./base/base.service"; 
import { HoatdongnhatkyRepository } from "../repositories/hoatdongnhatky.repository"; 

export class HoatdongnhatkyService extends BaseService {
    _hoatdongnhatkyService

    constructor() {
        const hoatdongnhatkyService = new HoatdongnhatkyRepository()
        super(hoatdongnhatkyService)
        this._hoatdongnhatkyService = hoatdongnhatkyService
    }
}