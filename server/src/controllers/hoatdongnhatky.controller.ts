import { Request, Response } from 'express';
import { HoatDongNhatKyDTO } from '../dtos/request/HoatDongNhatKy.dto';
import { VatTuSuDungDTO } from '../dtos/request/VatTuSuDung.dto';
import { ResponseDTO } from '../dtos/response.dto';
import { HoatdongnhatkyService } from '../services/hoatdongnhatky.service';
import { VatTuSuDungService } from '../services/VatTuSuDung.service';
export class HoatdongnhatkyController {
    private _hoatdongnhatkyService
    private _vatTuSuDungService

    constructor () {
        this._hoatdongnhatkyService = new HoatdongnhatkyService()
        this._vatTuSuDungService = new VatTuSuDungService()
    }

    getContracts = async (req: Request, res: Response):Promise<Response> => {
        const responseDTO = new ResponseDTO()
        try {
            const limit = parseInt( (req.query.limit ?? '0') as string )
            const page  = parseInt( (req.query.page ?? '1') as string )
            
            const result = await this._hoatdongnhatkyService.getContracts(limit, page)

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

    createContract = async ( req: Request, res: Response ): Promise<Response> => {

        const responseDTO = new ResponseDTO()

        try {
            const ReqData = req.body
            
            const sender = ReqData.wallet_XaVien

            const hoatDongNhatKyData:HoatDongNhatKyDTO = {
                id_NhatKyDongRuong      : ReqData.id_NhatKyDongRuong,
                id_LichMuaVu            : ReqData.id_LichMuaVu,
                id_ThuaDat              : ReqData.id_ThuaDat,
                id_XaVien               : ReqData.id_XaVien,
                id_HoatDongMuaVu        : ReqData.id_HoatDongMuaVu,
                ThoiGian                : ReqData.ThoiGian,
                wallet_XaVien           : ReqData.wallet_XaVien
            }
            
            await this._hoatdongnhatkyService.createContract(hoatDongNhatKyData, sender)

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

    getContractById = async (req: Request, res: Response): Promise<Response> => {
        const responseDTO = new ResponseDTO()
        try {
            const id = parseInt(req.params.id)
            const result = await this._hoatdongnhatkyService.getContractById(id)
            const danhSachVatTuSuDung = await this._vatTuSuDungService.getContractsByIdHoatDongNhatKy(id)
            
            const endResult = {
                ...result,
                danhSachVatTuSuDung: danhSachVatTuSuDung
            }

            if (!result) {
                return res.status(200).json(
                    responseDTO.success(
                        "Hoat dong nhat ky chua ton tai",
                    )
                )
            }

            return res.status(200).json(
                responseDTO.success(
                    "Lay du lieu thanh cong",
                    endResult
                )
            )
            
        }catch(err) {
            console.log(err)
            return res.status(500).json(responseDTO.serverError())
        }
    }

    getContractsByIdNhatKy = async (req: Request, res: Response): Promise<Response> => {

        const responseDTO = new ResponseDTO()
        try {
            const id_xaVien         = parseInt( (req.query.id_xaVien ?? '0') as string )
            const id_lichMuaVu      = parseInt( (req.query.id_lichMuaVu ?? '0' ) as string )
            const limit             = parseInt( (req.query.limit ?? '0') as string )
            const page              = parseInt( (req.query.page ?? '1') as string )
            
            const result = await this._hoatdongnhatkyService.getContractsByIdNhatKy(id_xaVien, id_lichMuaVu, limit, page)

            if (!result) {
                return res.status(200).json(
                    responseDTO.success(
                        "Nhat ky hoat dong chua ton tai",
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

    getContractsByIdLoHangLua = async (req: Request, res: Response): Promise<Response> => {

        const responseDTO = new ResponseDTO()
        try {
            const id_loHangLua      = parseInt( (req.query.id_loHangLua ?? '0') as string )
            const limit             = parseInt( (req.query.limit ?? '0') as string )
            const page              = parseInt( (req.query.page ?? '1') as string )
            
            const result = await this._hoatdongnhatkyService.getContractByIdLoHangLua(id_loHangLua, limit, page)

            if (!result) {
                return res.status(200).json(
                    responseDTO.success(
                        "Lo hang lua chua ton tai",
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