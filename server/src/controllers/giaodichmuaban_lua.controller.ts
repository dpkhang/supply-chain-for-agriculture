import { Request, Response }         from 'express'
import { ResponseDTO }               from '../dtos/response.dto'
import { GiaiDichMuaBanLua_Service } from '../services/giaodichmuaban_lua.service'
export class Giaodichmuaban_luaController {
    private _GiaiDichMuaBanLua_Service

    constructor () {
        this._GiaiDichMuaBanLua_Service = new GiaiDichMuaBanLua_Service()
    }

    getContracts = async (req: Request, res: Response):Promise<Response> => {
        const responseDTO = new ResponseDTO()
        try {
            const response = await this._GiaiDichMuaBanLua_Service.getContracts()
            responseDTO.message = "Lay du lieu thanh cong"
            responseDTO.status = 200
            responseDTO.results = response
            return res.status(200).json(responseDTO)
        }catch(err) {
            console.log(err)
            responseDTO.message = "Loi may chu"
            responseDTO.status = 500
            return res.status(500).json(responseDTO)
        }
    }

    addContract  = async (req: Request, res: Response):Promise<Response> => {
        const responseDTO = new ResponseDTO()
        const data = {
            ...req.body
        }
        delete data.sender
        try {
            const repsonse = await this._GiaiDichMuaBanLua_Service.addContract(data, req.body.sender)
            return res.status(200).json(repsonse)
        }catch(err) {
            console.log(err)
            responseDTO.message = "Loi may chu"
            responseDTO.status = 500
            return res.status(500).json(responseDTO)
        }
    }
}