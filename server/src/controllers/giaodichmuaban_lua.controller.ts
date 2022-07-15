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

            return res.status(200).json(responseDTO.success("Lay du lieu thanh cong", response))
        }catch(err) {
            console.log(err)
            return res.status(500).json(responseDTO.serverError())
        }
    }

    addContract  = async (req: Request, res: Response): Promise<Response> => {
        const responseDTO = new ResponseDTO()
        const data = {
            ...req.body
        }
        delete data.sender
        try {
            const repsonse = await this._GiaiDichMuaBanLua_Service.addContract(data, req.body.sender)
            if(repsonse) {
                return res.status(200).json(responseDTO.success('Them du lieu thanh cong', repsonse))
            }
            return res.status(400).json(responseDTO.badRequest())
        }catch(err: any) {            
        //  const error = Object.values<any>(err.data)[0].reason
            console.log(err)
            return res.status(500).json(responseDTO.serverError())
        }
    }
}