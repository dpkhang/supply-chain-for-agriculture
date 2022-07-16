import { NextFunction, Request, Response } from "express"
import { body, validationResult } from "express-validator"
import { ResponseDTO } from "../../dtos/response.dto"

export const GiaoDichMuaBanVatTuValidator = [
    body("id_XaVien").notEmpty().isNumeric().toInt(),
    body("id_GiaoDich").notEmpty().isNumeric().toInt(),
    body("id_NhaCungCap").notEmpty().isNumeric().toInt(),
    body("id_LoHangVatTu").notEmpty().isNumeric().toInt(),
    body("id_VatTu").notEmpty().isNumeric().toInt(),
    body("thoigianGiaoDich").notEmpty().isNumeric().toInt(),
    body("giaLoHang").notEmpty().isNumeric().toInt(),
    body("id_MuaVu").notEmpty().isNumeric().toInt(),
    body("tenVatTu").notEmpty().isString(),
    body("thoigianLoHang").notEmpty().isNumeric().toInt(),
    body("soluong").notEmpty().isNumeric().toInt(),
    body("xacnhanXaVien").notEmpty().isBoolean(),
    body("xacnhanNhaCungCap").notEmpty().isBoolean(),
    body("xacnhanHTX").notEmpty().isBoolean(),
    body("wallet_NguoiTao").notEmpty().isString(),
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