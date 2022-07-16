import { Request, Response } from 'express';
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