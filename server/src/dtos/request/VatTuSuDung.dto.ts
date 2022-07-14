import { Request, Response, NextFunction } from "express"
import { body, check, validationResult } from "express-validator"
import { ResponseDTO } from '../../dtos/response.dto';

interface VatTuSuDungDTO {
    id_VatTuSuDung      : number
    id_HoatDongNhatKy   : number
    id_VatTu            : number
    id_LoHangVatTu      : number
    ThoiGianVatTu       : number
    TenVatTu            : string
}

const VatTuSuDungValidator = [
    body('danhSachVatTu').notEmpty().isArray(),

        check("danhSachVatTu.*.id_VatTuSuDung"      , "id_VatTuSuDung chưa tồn tại").isNumeric().notEmpty(),

        check("danhSachVatTu.*.id_HoatDongNhatKy"   , "id_HoatDongNhatKy chưa tồn tại").isNumeric().notEmpty(),

        check("danhSachVatTu.*.id_VatTu"            , "id_VatTu chưa tồn tại").isNumeric().notEmpty(),

        check("danhSachVatTu.*.id_LoHangVatTu"      , "id_LoHangVatTu chưa tồn tại").isNumeric().notEmpty(),

        check("danhSachVatTu.*.ThoiGianVatTu"       , "ThoiGianVatTu chưa tồn tại").isNumeric().notEmpty(),
        
        check("danhSachVatTu.*.TenVatTu"            , "TenVatTu chưa tồn tại").isString().notEmpty(),

    ( req: Request, res: Response, next: NextFunction ) => {
        
        const errors = validationResult(req);

        if ( !errors.isEmpty() ) {
            const responseDTO = new ResponseDTO()

            return res.status(400).json(
                responseDTO.reponseWithOther(
                    400,
                    "Yêu cầu không phù hợp",
                    { 
                        errors: errors.array({
                            onlyFirstError: true
                        }) 
                    }
                )
            )
        }

        next()
    }
];

export {
    VatTuSuDungDTO,
    VatTuSuDungValidator
}