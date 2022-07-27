import { NextFunction, Request, Response } from "express"
import { body, validationResult } from "express-validator"
import { ResponseDTO } from "../../dtos/response.dto"

export const AccountValidator = [

    body('privateKey').notEmpty().isString(),

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