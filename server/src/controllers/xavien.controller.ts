import { Request, Response } from 'express';
import { ResponseDTO } from '../dtos/response.dto';
import { XavienService } from './../services/xavien.service';
export class XavienController {
    private _xavienService

    constructor () {
        this._xavienService = new XavienService()
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