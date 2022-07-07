import { BaseService } from "./base/base.service"; 
import { LoHangVatTuContract } from "../contracts/LoHangVatTu.contract";

export class LoHangVatTu_Service extends BaseService {
    //_giaodichmuaban_luaService
    private _LoHangVatTuContract: LoHangVatTuContract

    constructor() {
       const loHangVatTuContract = new LoHangVatTuContract()
       super(loHangVatTuContract)
       this._LoHangVatTuContract = loHangVatTuContract
    }
}