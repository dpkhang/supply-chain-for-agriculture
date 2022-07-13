import { BaseService } from "./base/base.service"; 
import { HoatDongNhatKyContract } from "../contracts/HoatDongNhatKy.contract";
import { NhatKyHoatDongDTO } from "../dtos/request/NhatKyHoatDong.dto";
const ADDRESS_NhatKyDongRuong = process.env.ADDRESS_NhatKyDongRuong || ""

export class HoatdongnhatkyService extends BaseService {
    _HoatDongNhatKyContract

    constructor() {
        const hoatdongnhatkyService = new HoatDongNhatKyContract()
        super(hoatdongnhatkyService)
        this._HoatDongNhatKyContract = hoatdongnhatkyService
    }

    createContract = async (data: NhatKyHoatDongDTO, sender: string) => {
        try {
            const dataWillStoreBlockchain = data as any
            delete dataWillStoreBlockchain.wallet_XaVien

            dataWillStoreBlockchain.address_NhatKyDongRuong = ADDRESS_NhatKyDongRuong
        
            this._HoatDongNhatKyContract.addContract(dataWillStoreBlockchain, sender);
        } catch ( err ) {
            throw err
        }
    }
}