import { Request, Response } from 'express';
import { NhatKyDongRuongDTO } from '../dtos/request/NhatKyDongRuong.dto';
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
            return res.status(500).json(responseDTO.serverError())
        }
    }

    storeTransaction = async ( req: Request, res: Response ): Promise<Response> => {
        const responseDTO = new ResponseDTO()
        try {
            const ReqData: NhatKyDongRuongDTO = req.body
        
            const sender = ReqData.wallet_XaVien;
            const nhatKyDongRuong = ReqData as any
            delete nhatKyDongRuong.wallet_XaVien

            await this._nhatkydongruongService.AddTransaction(nhatKyDongRuong, sender)


            return res.status(200).json(
                responseDTO.success(
                    "Luu du lieu len blockchain thanh cong",
                    ReqData
                )
            )
        }catch(err) {
            console.log(err)

            const errorData = ( err as any ).data

            for ( let key in errorData ) {
                if ( errorData[key].hasOwnProperty('reason') ) {
                    return res.status(500).json(responseDTO.responseWithOther(
                        500,
                        errorData[key].reason
                    ))
                }
            }

            return res.status(500).json(responseDTO.serverError())
        }
    }
}