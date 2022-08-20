import { NextFunction, Request, Response } from "express"
import { body, check, validationResult } from "express-validator"
import { ResponseDTO } from "../../dtos/response.dto";

const VatTuSuDungValidator = [
    body('danhSachVatTu').notEmpty().isArray(),

        check("id_VatTuSuDung"      , "id_VatTuSuDung chưa tồn tại").isNumeric().notEmpty(),

        check("id_HoatDongNhatKy"   , "id_HoatDongNhatKy chưa tồn tại").isNumeric().notEmpty(),

        check("id_VatTu"            , "id_VatTu chưa tồn tại").isNumeric().notEmpty(),

        check("id_LoHangVatTu"      , "id_LoHangVatTu chưa tồn tại").isNumeric().notEmpty(),

        check("ThoiGianVatTu"       , "ThoiGianVatTu chưa tồn tại").isNumeric().notEmpty(),
        
        check("TenVatTu"            , "TenVatTu chưa tồn tại").isString().notEmpty(),

        check("wallet_XaVien"       , "wallet_XaVien chưa tồn tại").isString().notEmpty(),

        check("password_Wallet"     , "password_Wallet chưa tồn tại").isString(),

    ( req: Request, res: Response, next: NextFunction ) => {
        
        const errors = validationResult(req);

        if ( !errors.isEmpty() ) {
            const responseDTO = new ResponseDTO()

            return res.status(400).json(
                responseDTO.responseWithOther(
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
]

export {
    VatTuSuDungValidator
}