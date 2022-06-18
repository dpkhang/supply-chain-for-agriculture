import { BaseService } from "./base/base.service"; 
import { KhovattuRepository } from "../repositories/khovattu.repository";

export class KhohangvattuService extends BaseService {
    _khohangvattuService

    constructor() {
        const khohangvattu = new KhovattuRepository()
        super(khohangvattu)
        this._khohangvattuService = khohangvattu
    }
}