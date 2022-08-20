import { NextFunction, Request, Response } from "express"
import { body, validationResult } from "express-validator"
import { ResponseDTO } from "../../dtos/response.dto"

export const GiaoDichMuaBanGiongLuaValidator = [

    body('id_GiaoDichLuaGiong').notEmpty().isNumeric(),

    body('id_XaVien').notEmpty().isNumeric(),

    body('id_NhaCungCapVatTu').notEmpty().isNumeric(),

    body('id_LichMuaVu').notEmpty().isNumeric(),

    body('id_LuaGiong').notEmpty().isNumeric(),

    body('SoLuong').notEmpty().isNumeric(),

    body('TenLuaGiong').notEmpty().isString(),

    body('ThoiGian').notEmpty().isNumeric(),

    body('wallet_XaVien').notEmpty().isString(),

    body('password_Wallet').notEmpty().isString(),

    ( req: Request, res: Response, next: NextFunction ) => {

        const errors = validationResult(req)

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