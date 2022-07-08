import { Request, Response } from 'express';
import { ResponseDTO } from '../dtos/response.dto';
import { NhatkydongruongService } from '../services/nhatkydongruong.service';
export class NhatkydongruongController {
    private _nhatkydongruongService

    constructor () {
        this._nhatkydongruongService = new NhatkydongruongService()
    }

    getContracts = async (req: Request, res: Response):Promise<Response> => {
        const responseDTO = new ResponseDTO()
        try {
            return res.status(200).json('')
        }catch(err) {
            responseDTO.message = "Loi may chu"
            responseDTO.status = 500
            return res.status(500).json(responseDTO)
        }
    }
}