import { UserRepository } from "../repositories/user.repository"
import { XavienRepository } from "../repositories/xavien.repository";
import { BaseService } from "./base/base.service"

export class XaVienService extends BaseService {
    private _xaVienService

    constructor() {
        const _xaVienRepository = new XavienRepository();
        super(_xaVienRepository);
        this._xaVienService = _xaVienRepository;
    }
}