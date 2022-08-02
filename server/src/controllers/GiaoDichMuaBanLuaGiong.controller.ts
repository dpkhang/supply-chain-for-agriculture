import { Request, Response } from 'express';
import { ResponseDTO } from '../dtos/response.dto';
import { GiaoDichMuaBanLuaGiongService } from '../services/giaoDichMuaBanLuaGiong.service'; 

export class GiaoDichMuaBanGiongLuaController {
    private _GiaoDichMuaBanLuaGiongService

    constructor () {
        this._GiaoDichMuaBanLuaGiongService = new GiaoDichMuaBanLuaGiongService()
    }

    createContract = async ( req: Request, res: Response ): Promise<Response> => {

        const responseDTO = new ResponseDTO()

        try {
            const ReqData = req.body

            await this._GiaoDichMuaBanLuaGiongService.createContract(ReqData)

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

    getContractById = async ( req: Request, res: Response ) => {
        const responseDTO = new ResponseDTO()
        try {
            const id = parseInt(req.params.id)
            const result = await this._GiaoDichMuaBanLuaGiongService.getContractById(id)

            if (!result) {
                return res.status(200).json(
                    responseDTO.success(
                        "Giao dich mua ban lua giong chua ton tai",
                    )
                )
            }

            return res.status(200).json(
                responseDTO.success(
                    "Lay du lieu thanh cong",
                    result
                )
            )
            
        }catch(err) {
            console.log(err)
            return res.status(500).json(responseDTO.serverError())
        }
    }

    getContractByIdLoHangLua = async ( req: Request, res: Response ) => {
        const responseDTO = new ResponseDTO()
        try {
            const id = parseInt(req.params.id)
            const result = await this._GiaoDichMuaBanLuaGiongService.getContractByIdLoHangLua(id)

            if (!result) {
                return res.status(200).json(
                    responseDTO.success(
                        "Giao dich mua ban lua giong chua ton tai",
                    )
                )
            }

            return res.status(200).json(
                responseDTO.success(
                    "Lay du lieu thanh cong",
                    result
                )
            )
            
        }catch(err) {
            console.log(err)
            return res.status(500).json(responseDTO.serverError())
        }
    }


    

}