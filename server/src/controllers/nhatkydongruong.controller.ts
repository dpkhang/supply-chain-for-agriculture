import { Request, Response } from 'express';
import { ResponseDTO } from '../dtos/response.dto';
import { NhatkydongruongService } from '../services/nhatkydongruong.service';
export class NhatkydongruongController {
    private _nhatkydongruongService

    constructor () {
        this._nhatkydongruongService = new NhatkydongruongService()
    }

    getAll = async (req: Request, res: Response):Promise<Response> => {
        try {

            const list_nhatkydongruong = await this._nhatkydongruongService.findAllData();
            const response: ResponseDTO = {
                message: '',
                data: list_nhatkydongruong
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