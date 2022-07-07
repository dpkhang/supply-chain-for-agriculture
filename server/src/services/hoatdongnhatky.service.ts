import { BaseService } from "./base/base.service"; 
import { HoatDongNhatKyContract } from "../contracts/HoatDongNhatKy.contract";

export class HoatdongnhatkyService extends BaseService {
    _HoatDongNhatKyContract

    constructor() {
        const hoatdongnhatkyService = new HoatDongNhatKyContract()
        super(hoatdongnhatkyService)
        this._HoatDongNhatKyContract = hoatdongnhatkyService
    }
}