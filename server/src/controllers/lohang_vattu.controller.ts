import { Request, Response } from 'express';
import { ResponseDTO } from '../dtos/response.dto';
import { LohangvattuService } from '../services/lohang_vattu.service'; 
export class LohangvattuController {
    private _lohangvattuService

    constructor () {
        this._lohangvattuService = new LohangvattuService()
    }

    getAll = async (req: Request, res: Response):Promise<Response> => {
        try {

            const list_lohangvattu = await this._lohangvattuService.findAll();
            const response: ResponseDTO = {
                message: '',
                data: list_lohangvattu
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