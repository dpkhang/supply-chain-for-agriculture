import { BaseService } from "./base/base.service"; 
import { VatTuSuDungContract } from "../contracts/VatTuSuDung.contract"; 

export class VatTuSuDungService extends BaseService {
    _VatTuSuDungContract

    constructor() {
        const vatTuSuDungContract = new VatTuSuDungContract()
        super(vatTuSuDungContract)
        this._VatTuSuDungContract = vatTuSuDungContract
    }
}