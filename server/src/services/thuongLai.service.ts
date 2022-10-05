import { ThuonglaiRepository } from "../repositories/thuonglai.repository";
import { BaseService } from "./base/base.service"

export class ThuongLaiService extends BaseService {
    private _thuongLaiService

    constructor() {
        const _thuongLaiRepository = new ThuonglaiRepository();
        super(_thuongLaiRepository);
        this._thuongLaiService = _thuongLaiRepository;
    }
}