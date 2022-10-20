import { NhacungcapvattuRepository } from "../repositories/nhacungcapvattu.repository";
import { BaseService } from "./base/base.service"

export class NhaCungCapVatTuService extends BaseService {
    private _nhaCungCapVatTuService

    constructor() {
        const _nhaCungCapVatTuRepository = new NhacungcapvattuRepository();
        super(_nhaCungCapVatTuRepository);
        this._nhaCungCapVatTuService = _nhaCungCapVatTuRepository;
    }
}