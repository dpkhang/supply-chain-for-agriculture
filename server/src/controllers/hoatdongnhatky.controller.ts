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
                id_NhatKyDongRuong  : ReqData.id_NhatKyDongRuong,
                id_HoatDongNhatKy   : ReqData.id_HoatDongNhatKy,
                ThoiGian            : ReqData.ThoiGian,
                wallet_XaVien       : ReqData.wallet_XaVien,
            }
            await this._hoatdongnhatkyService.createContract(hoatDongNhatKyData, sender)

            const danhSachVatTuSuDungData: VatTuSuDungDTO[] = ReqData.danhSachVatTu
            await this._vatTuSuDungService.createContract(danhSachVatTuSuDungData, sender)

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