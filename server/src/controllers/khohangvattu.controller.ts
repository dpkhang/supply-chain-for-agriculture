import { Request, Response } from 'express';
import { ResponseDTO } from '../dtos/response.dto';
import { KhohangvattuService } from '../services/khohangvattu.service'; 
export class KhohangvattuController {
    private _khohangvattuService

    constructor () {
        this._khohangvattuService = new KhohangvattuService()
    }

    getAll = async (req: Request, res: Response):Promise<Response> => {
        try {

            const list_khohangvattu = await this._khohangvattuService.findAll();
            const response: ResponseDTO = {
                message: '',
                data: list_khohangvattu
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