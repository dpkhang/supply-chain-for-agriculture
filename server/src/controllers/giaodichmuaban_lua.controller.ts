import { Request, Response } from 'express';
import { ResponseDTO } from '../dtos/response.dto';
import { Giaodichmuaban_luaService } from '../services/giaodichmuaban_lua.service'; 
export class Giaodichmuaban_luaController {
    private _giaodichmuaban_luaService

    constructor () {
        this._giaodichmuaban_luaService = new Giaodichmuaban_luaService()
    }

    getAll = async (req: Request, res: Response):Promise<Response> => {
        try {

            const list_giaodichmuaban_lua = await this._giaodichmuaban_luaService.findAll();
            const response: ResponseDTO = {
                message: '',
                data: list_giaodichmuaban_lua
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