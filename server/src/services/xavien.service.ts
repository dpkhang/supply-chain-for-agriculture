import { BaseService } from "./base/base.service";
import { XavienRepository } from '../repositories/xavien.repository';

export class XavienService extends BaseService {
    _xavienService

    constructor() {
        const xavienService = new XavienRepository()
        super(xavienService)
        this._xavienService = xavienService
    }
}