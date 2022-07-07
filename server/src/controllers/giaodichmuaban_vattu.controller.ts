import { Request, Response } from 'express';
import { ResponseDTO } from '../dtos/response.dto';
import { GiaoDichMuaBanVatTu_Service } from '../services/giaodichmuaban_vattu.service';
export class Giaodichmuaban_vattuController {
    private _GiaoDichMuaBanVatTu_Service

    constructor () {
        this._GiaoDichMuaBanVatTu_Service = new GiaoDichMuaBanVatTu_Service()
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