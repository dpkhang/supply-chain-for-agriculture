import { BaseService } from "./base/base.service"; 
import { Giaodichmuaban_vattuRepository } from "../repositories/giaodichmuaban_vattu.repository";

export class Giaodichmuaban_vattuService extends BaseService {
    _giaodichmuaban_vattuService

    constructor() {
        const giaodichmuaban_vattu = new Giaodichmuaban_vattuRepository()
        super(giaodichmuaban_vattu)
        this._giaodichmuaban_vattuService = giaodichmuaban_vattu
    }
}