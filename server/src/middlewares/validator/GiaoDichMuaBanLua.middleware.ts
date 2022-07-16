import { NextFunction, Request, Response } from "express"
import { body, validationResult } from "express-validator"
import { ResponseDTO } from "../../dtos/response.dto"

export const GiaoDichMuaBanLuaValidator = [
    body('id_GiaoDich').notEmpty().isNumeric().toInt(),
    body('id_LoHangLua').notEmpty().isNumeric().toInt(),
    body('id_XaVien').notEmpty().isNumeric().toInt(),
    body('id_ThuongLai').notEmpty().isNumeric().toInt(),
    body('thoigianGiaoDich').notEmpty().isNumeric().toInt(),
    body('giaLoHang').notEmpty().isNumeric().toInt(),
    body('id_GiongLua').notEmpty().isNumeric().toInt(),
    body('id_NhatKyDongRuong').notEmpty().isNumeric().toInt(),
    body('thoigianLoHang').notEmpty().isNumeric().toInt(),
    body('tenGiongLua').notEmpty().isString(),
    body('soluong').notEmpty().isNumeric().toInt(),
    body('xacnhanXaVien').notEmpty().isBoolean(),
    body('xacnhanThuongLai').notEmpty().isBoolean(),
    body('xacnhanHTX').notEmpty().isBoolean(),
    body('dientichdat').notEmpty().isNumeric().toInt(),
    body('maxSoLuong').notEmpty().isNumeric().toInt(),
    body('wallet_NguoiTao').notEmpty().isString(),
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