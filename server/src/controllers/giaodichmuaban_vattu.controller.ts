import { Request, Response } from 'express';
import { ResponseDTO } from '../dtos/response.dto';
import { Giaodichmuaban_vattuService } from '../services/giaodichmuaban_vattu.service';
export class Giaodichmuaban_vattuController {
    private _giaodichmuaban_vattuService

    constructor () {
        this._giaodichmuaban_vattuService = new Giaodichmuaban_vattuService()
    }

    getAll = async (req: Request, res: Response):Promise<Response> => {
        try {

            const list_giaodichmuabanvattu= await this._giaodichmuaban_vattuService.findAll();
            const response: ResponseDTO = {
                message: '',
                data: list_giaodichmuabanvattu
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