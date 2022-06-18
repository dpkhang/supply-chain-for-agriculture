import { Request, Response } from 'express';
import { ResponseDTO } from '../dtos/response.dto';
import { LohangluaService } from '../services/lohang_lua.service';
export class KhohangvattuController {
    private _lohangluaService

    constructor () {
        this._lohangluaService = new LohangluaService()
    }

    getAll = async (req: Request, res: Response):Promise<Response> => {
        try {

            const list_lohang_lua= await this._lohangluaService.findAll();
            const response: ResponseDTO = {
                message: '',
                data: list_lohang_lua
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