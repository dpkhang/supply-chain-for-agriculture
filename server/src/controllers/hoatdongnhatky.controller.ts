import { Request, Response } from 'express';
import { ResponseDTO } from '../dtos/response.dto';
import { HoatdongnhatkyService } from '../services/hoatdongnhatky.service';
export class HoatdongnhatkyController {
    private _hoatdongnhatkyService

    constructor () {
        this._hoatdongnhatkyService = new HoatdongnhatkyService()
    }

    getContracts = async (req: Request, res: Response):Promise<Response> => {
        const responseDTO = new ResponseDTO()
        try {
            return res.status(200).json('')
        }catch(err) {
            return res.status(500).json(responseDTO.serverError())
        }
    }
}