import { NextFunction, Request, Response } from "express"
import { body, validationResult } from "express-validator"
import { ResponseDTO } from "../../dtos/response.dto";

const NhatKyHoatDongValidator = [

    body('id_NhatKyDongRuong').notEmpty().isNumeric().toInt(),

    body('id_LichMuaVu').notEmpty().isNumeric().toInt(),

    body('id_ThuaDat').notEmpty().isNumeric().toInt(),

    body('id_XaVien').notEmpty().isNumeric().toInt(),

    body('id_HoatDongMuaVu').notEmpty().isNumeric().toInt(),

    body('ThoiGian').notEmpty().isNumeric().toInt(),

    body('wallet_XaVien').notEmpty().isString(),

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
];

export {
    NhatKyHoatDongValidator
}