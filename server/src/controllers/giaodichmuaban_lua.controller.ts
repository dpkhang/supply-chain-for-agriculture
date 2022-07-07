import { Request, Response } from 'express';
import { ResponseDTO } from '../dtos/response.dto';
import { GiaiDichMuaBanLua_Service } from '../services/giaodichmuaban_lua.service'; 
export class Giaodichmuaban_luaController {
    private _GiaiDichMuaBanLua_Service

    constructor () {
        this._GiaiDichMuaBanLua_Service = new GiaiDichMuaBanLua_Service()
    }

    getAll = async (req: Request, res: Response):Promise<Response> => {
        try {
            return res.status(200).json({msg: "success"})
        }catch(err) {
            const response: ResponseDTO = {
                message: 'Server Error'
            }
            return res.status(500).json(response)
        }
    }
}