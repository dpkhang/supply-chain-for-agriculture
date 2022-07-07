import { BaseService }                      from "./base/base.service"; 
import { GiaoDichMuaBanVatTuContract }      from "../contracts/GiaoDichMuaBanVatTu.contract";

export class GiaoDichMuaBanVatTu_Service extends BaseService {
    _GiaoDichMuaBanVatTuContract:GiaoDichMuaBanVatTuContract

    constructor() {
        const giaoDichMuaBanVatTuContract = new GiaoDichMuaBanVatTuContract()
        super(giaoDichMuaBanVatTuContract)
        this._GiaoDichMuaBanVatTuContract = giaoDichMuaBanVatTuContract
    }
}