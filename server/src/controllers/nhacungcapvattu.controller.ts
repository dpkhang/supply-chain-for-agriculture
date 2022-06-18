import { Request, Response } from 'express';
import { ResponseDTO } from '../dtos/response.dto';
import { NhacungcapvattuService } from '../services/nhacungcapvatty.service';
export class NhacungcapvattuController {
    private _nhacungcapvattuService

    constructor () {
        this._nhacungcapvattuService = new NhacungcapvattuService()
    }

    getAll = async (req: Request, res: Response):Promise<Response> => {
        try {

            const list_nhacungcapvattu = await this._nhacungcapvattuService.findAll();
            const response: ResponseDTO = {
                message: '',
                data: list_nhacungcapvattu
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