import { Request, Response } from 'express';
import { VatTuSuDungDTO } from '../dtos/request/VatTuSuDung.dto';
import { ResponseDTO } from '../dtos/response.dto';
import { VatTuSuDungService } from '../services/VatTuSuDung.service';
export class VatTuSuDungController {
    private _vatTuSuDung

    constructor () {
        this._vatTuSuDung = new VatTuSuDungService()
    }

    getContracts = async (req: Request, res: Response):Promise<Response> => {
        const responseDTO = new ResponseDTO()
        try {
            const limit = parseInt( (req.query.limit ?? '0') as string )
            const page  = parseInt( (req.query.page ?? '1') as string )
            
            const result = await this._vatTuSuDung.getContracts(limit, page)

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

    createContract = async ( req: Request, res: Response ) => {
        const responseDTO = new ResponseDTO()

        try {
            const ReqData = req.body

            const vatTuSuDung: VatTuSuDungDTO = {
                id_VatTuSuDung      : ReqData.id_VatTuSuDung,
                id_HoatDongNhatKy   : ReqData.id_HoatDongNhatKy,
                id_VatTu            : ReqData.id_VatTu,
                id_LoHangVatTu      : ReqData.id_LoHangVatTu,
                ThoiGianVatTu       : ReqData.ThoiGianVatTu,
                TenVatTu            : ReqData.TenVatTu,
                Wallet_XaVien       : ReqData.wallet_XaVien,
                password_Wallet     : ReqData.password_Wallet,
            }

            await this._vatTuSuDung.create(vatTuSuDung)

            return res.status(200).json(
                responseDTO.success(
                    "Lưu dữ liệu lên Blockchain thành công",
                    ReqData
                )
            )

        } catch ( err ) {
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
            const result = await this._vatTuSuDung.getContractById(id)

            if (!result) {
                return res.status(200).json(
                    responseDTO.success(
                        "Vat tu su dung chua ton tai",
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

    getContractByIdHoatDongNhatKy = async ( req: Request, res: Response ) => {
        const responseDTO = new ResponseDTO()
        try {
            const id = parseInt(req.params.id)
            const limit = parseInt( (req.query.limit ?? '0') as string )
            const page  = parseInt( (req.query.page ?? '1') as string )

            const result = await this._vatTuSuDung.getContractsByIdHoatDongNhatKy(id, limit, page)

            if (!result) {
                return res.status(200).json(
                    responseDTO.success(
                        "Vat tu su dung chua ton tai",
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