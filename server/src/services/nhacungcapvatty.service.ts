import { BaseService } from "./base/base.service";
import { NhacungcapvattuRepository } from "../repositories/nhacungcapvattu.repository";

export class NhacungcapvattuService extends BaseService {
    _nhacungcapvattuService

    constructor() {
        const nhacungcapvattuService = new NhacungcapvattuRepository()
        super(nhacungcapvattuService)
        this._nhacungcapvattuService = nhacungcapvattuService
    }
}