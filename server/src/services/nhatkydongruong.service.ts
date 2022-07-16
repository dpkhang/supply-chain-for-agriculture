import { BaseService } from "./base/base.service"; 
import { NhatKyDongRuongContract } from "../contracts/NhatKyDongRuong.contract";
import { NhatKyDongRuong } from "../contracts/NhatKyDongRuong.contract";

export class NhatkydongruongService extends BaseService {
    _NhatKyDongRuongContract

    constructor() {
        const nhatkydongruongService = new NhatKyDongRuongContract()
        super(nhatkydongruongService)
        this._NhatKyDongRuongContract = nhatkydongruongService
    }

    async AddTransaction( data: NhatKyDongRuong, sender: string ) {
        try {
            await this._NhatKyDongRuongContract.addContract(data, sender);
        } catch (err) {
            throw err
        }
    }

    async getAllContract() {

    }
}