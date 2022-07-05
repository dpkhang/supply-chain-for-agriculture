import { Request, Response } from 'express';
import { ResponseDTO } from '../dtos/response.dto';
import { xavienInputCreateDto } from '../dtos/xavien.dto';
import { XavienService } from './../services/xavien.service';
export class XavienController {
    private _xavienService

    constructor () {
        this._xavienService = new XavienService()
    }

    checkValidate = (data: object) => {
        for (const item in data) {
            if ( !item ) {
                return false
            }
        }
        return true
    }

    //add sample data
    register = async (req: Request, res: Response):Promise<Response> => {
        try {
            const xavien:xavienInputCreateDto = req.body

            if ( !this.checkValidate(xavien) ) return res.status(400).json({msg: "Du lieu khong dung dinh dang"})

            const xavienResult = await this._xavienService.register(xavien);

            return res.status(200).json(xavienResult.get());
        } catch(err) {
            const response: ResponseDTO = {
                message: 'Server Error'
            }
            return res.status(500).json(response)
        }
    }

    getAll = async (req: Request, res: Response):Promise<Response> => {
        try {

            const list_xavien = await this._xavienService.findAll();
            const response: ResponseDTO = {
                message: '',
                data: list_xavien
            }

            return res.status(200).json(response)
        }catch(err) {
            const response: ResponseDTO = {
                message: 'Server Error'
            }
            return res.status(500).json(response)
        }
    }
}