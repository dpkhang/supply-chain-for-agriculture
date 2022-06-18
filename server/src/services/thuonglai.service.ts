import { BaseService } from "./base/base.service";
import { ThuonglaiRepository } from '../repositories/thuonglai.repository';

export class ThuonglaiService extends BaseService {
    _thuonglaiService

    constructor() {
        const thuonglaiService = new ThuonglaiRepository()
        super(thuonglaiService)
        this._thuonglaiService = thuonglaiService
    }
}