import { BaseService } from "./base/base.service"; 
import { HoatDongNhatKyContract } from "../contracts/HoatDongNhatKy.contract";
import { HoatDongNhatKyDTO } from "../dtos/request/HoatDongNhatKy.dto";
const ADDRESS_NhatKyDongRuong = process.env.ADDRESS_NhatKyDongRuong || "";

export class HoatdongnhatkyService extends BaseService {
    _HoatDongNhatKyContract

    constructor() {
        const hoatdongnhatkyService = new HoatDongNhatKyContract()
        super(hoatdongnhatkyService)
        this._HoatDongNhatKyContract = hoatdongnhatkyService
    }

    createContract = async (data: HoatDongNhatKyDTO, sender: string) => {
        try {
            const hoatDongNhatKy = data as any
            delete hoatDongNhatKy.wallet_XaVien

            hoatDongNhatKy.address_NhatKyDongRuong = ADDRESS_NhatKyDongRuong
        
            await this._HoatDongNhatKyContract.addContract(hoatDongNhatKy, sender);

        } catch ( err ) {
            throw err
        }
    }
}