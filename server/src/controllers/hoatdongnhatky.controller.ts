import { Request, Response } from 'express';
import { ResponseDTO } from '../dtos/response.dto';
import { HoatdongnhatkyService } from '../services/hoatdongnhatky.service';
export class HoatdongnhatkyController {
    private _hoatdongnhatkyService

    constructor () {
        this._hoatdongnhatkyService = new HoatdongnhatkyService()
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