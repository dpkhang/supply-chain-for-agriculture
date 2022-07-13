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

    createContract = async ( req: Request, res: Response ): Promise<Response> => {
        const responseDTO = new ResponseDTO()
        try {
            const ReqData = req.body
            
            const sender = ReqData.wallet_XaVien;

            await this._hoatdongnhatkyService.createContract(ReqData, sender)

            return res.status(200).json(
                responseDTO.success(
                    "Luu du lieu len blockchain thanh cong",
                    ReqData
                )
            )
        }catch(err) {
            console.log(err)
            return res.status(500).json(responseDTO.serverError())
        }
    }
}