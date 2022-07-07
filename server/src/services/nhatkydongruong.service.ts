import { BaseService } from "./base/base.service"; 
import { NhatKyDongRuongContract } from "../contracts/NhatKyDongRuong.contract";

export class NhatkydongruongService extends BaseService {
    _NhatKyDongRuongContract

    constructor() {
        const nhatkydongruongService = new NhatKyDongRuongContract()
        super(nhatkydongruongService)
        this._NhatKyDongRuongContract = nhatkydongruongService
    }
}