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
            const limit = parseInt( (req.query.limit ?? '0') as string )
            const page  = parseInt( (req.query.page ?? '1') as string )
            
            const result = await this._nhatkydongruongService.getContracts(limit, page)

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
        }catch(err: any) {
            //const errors = Object.values<any>(err.data)
            //console.log(errors[0].reason)
            // return res.status(500).json(responseDTO.responseWithOther(
            //     500,
            //     error[0].reason
            // ))

            return res.status(500).json(responseDTO.responseWithOther(
                500,
                err.reason
            ))
        }
    }

    getContractById = async ( req: Request, res: Response ) => {
        const responseDTO = new ResponseDTO()
        try {
            const id = parseInt(req.params.id)
            const result = await this._nhatkydongruongService.getContractById(id)

            if (!result) {
                return res.status(200).json(
                    responseDTO.success(
                        "Nhat ky dong ruong chua ton tai",
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

    getContractByIdXaVien = async ( req: Request, res: Response ) => {
        const responseDTO = new ResponseDTO()
        try {
            const id = parseInt(req.params.id)
            const limit = parseInt( (req.query.limit ?? '0') as string )
            const page  = parseInt( (req.query.page ?? '1') as string )

            const result = await this._nhatkydongruongService.getContractByIdXaVien(id, limit, page)
            console.log(result)

            if (!result) {
                return res.status(200).json(
                    responseDTO.success(
                        "Nhat ky dong ruong chua ton tai",
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