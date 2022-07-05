import { BaseService } from "./base/base.service"
import { XavienRepository } from '../repositories/xavien.repository'
import { xavienInputCreateDto } from "../dtos/xavien.dto"
import { v4 as uuid } from "uuid" 
import { hashSync } from "bcryptjs"
export class XavienService extends BaseService {
    _xavienService

    constructor() {
        const xavienService = new XavienRepository()
        super(xavienService)
        this._xavienService = xavienService
    }

    register = async (xavien: xavienInputCreateDto) => {
        try {
            const id = parseInt( uuid() )
            const dateArr = xavien.DOB.split('-')
            const hashPassword = await hashSync(xavien.password, 10);

            return await this._xavienService.register({
                id_xavien: id,
                ...xavien,
                password: hashPassword,
                DOB: new Date(Date.UTC(
                    parseInt(dateArr[0]),       //year
                    parseInt(dateArr[1]),       //month
                    parseInt(dateArr[2])        //day
                ))
            })
        } catch (err) {
            throw err
        }
    }
}