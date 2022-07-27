import { Request, Response } from 'express';
import { ResponseDTO } from '../dtos/response.dto';
import { GiaoDichMuaBanGiongLuaService } from '../services/GiaoDichMuaBanGiongLua.service'; 

export class GiaoDichMuaBanGiongLuaController {
    private _GiaoDichMuaBanGiongLuaService

    constructor () {
        this._GiaoDichMuaBanGiongLuaService = new GiaoDichMuaBanGiongLuaService()
    }

    createContract = async ( req: Request, res: Response ): Promise<Response> => {

        const responseDTO = new ResponseDTO()

        try {
            const ReqData = req.body

            await this._GiaoDichMuaBanGiongLuaService.createContract(ReqData)

            delete ReqData.wallet_XaVien

            return res.status(200).json(
                responseDTO.success(
                    "Lưu dữ liệu lên Blockchain thành công",
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