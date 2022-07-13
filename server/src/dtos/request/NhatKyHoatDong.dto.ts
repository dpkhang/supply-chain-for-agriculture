import { Request, Response, NextFunction } from "express"
import { body, validationResult } from "express-validator"
import { ResponseDTO } from '../../dtos/response.dto';

interface NhatKyHoatDongDTO {
    id_NhatKyDongRuong      : number
    id_HoatDongNhatKy       : number
    ThoiGian                : number
    wallet_XaVien           : string
}

const NhatKyHoatDongValidator = [
    body('id_NhatKyDongRuong').notEmpty().isNumeric().toInt(),
    body('id_HoatDongNhatKy').notEmpty().isNumeric().toInt(),
    body('ThoiGian').notEmpty().isNumeric().toInt(),
    body('wallet_XaVien').notEmpty().isString(),
    ( req: Request, res: Response, next: NextFunction ) => {
        const errors = validationResult(req);

        if ( !errors.isEmpty() ) {
            const responseDTO = new ResponseDTO()
            return res.status(400).json(
                responseDTO.reponseWithOther(
                    400,
                    "Yeu cau khong duoc phu hop.",
                    { errors: errors.array() }
                )
            )
        }

        next()
    }
];

export {
    NhatKyHoatDongDTO,
    NhatKyHoatDongValidator
}