import { NextFunction, Request, Response } from "express"
import { body, validationResult } from "express-validator"
import { ResponseDTO } from "../../dtos/response.dto"

export const GiaoDichMuaSanPhamValidator = [
    body('id_NguoiBan').notEmpty().isNumeric().toInt(),
    body('id_NguoiTieuDung').notEmpty().isNumeric().toInt(),
    body('id_GiaoDich').notEmpty().isNumeric().toInt(),
    body('id_LoHangSanPham').notEmpty().isNumeric().toInt(),
    body('giaLoHang').notEmpty().isNumeric().toInt(),
    body('thoigianGiaoDich').notEmpty().isNumeric().toInt(),
    body('id_giaoDichMuaBanLua').notEmpty().isNumeric().toInt(),
    body('thoigianLoHang').notEmpty().isNumeric().toInt(),
    body('soluong').notEmpty().isNumeric().toInt(),
    body('xacNhanNguoiBan').notEmpty().isBoolean(),
    body('xacNhanNguoiTieuDung').notEmpty().isBoolean(),
    body('xacNhanHTX').notEmpty().isBoolean(),
    body('wallet_NguoiTao').notEmpty().isString(),
    body('password').notEmpty().isString(),
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