import { BaseService } from "./base/base.service"; 
import { LohangvattuRepository } from "../repositories/lohangvattu.reponsitory"; 

export class LohangvattuService extends BaseService {
    _lohangvattuService

    constructor() {
        const lohangvattuService = new LohangvattuRepository()
        super(lohangvattuService)
        this._lohangvattuService = lohangvattuService
    }
}