import { Request, Response } from 'express';
import { ResponseDTO } from '../dtos/response.dto';
import { ThuonglaiService } from '../services/thuonglai.service';
export class ThuonglaiController {
    private _thuonglaiService

    constructor () {
        this._thuonglaiService = new ThuonglaiService()
    }

    getAll = async (req: Request, res: Response):Promise<Response> => {
        try {

            const list_thuonglai = await this._thuonglaiService.findAll();
            const response: ResponseDTO = {
                message: '',
                data: list_thuonglai
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