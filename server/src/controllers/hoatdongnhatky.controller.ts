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

            const list_hoatdongnhatky= await this._hoatdongnhatkyService.findAll();
            const response: ResponseDTO = {
                message: '',
                data: list_hoatdongnhatky
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