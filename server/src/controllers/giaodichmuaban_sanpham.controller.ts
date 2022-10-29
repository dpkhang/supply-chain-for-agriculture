import { GiaoDichMuaBanSanPham_Service } from './../services/giaodichmuaban_sanpham.service';
import { Request, Response } from "express";
import { GiaoDichMuaBanSanPhamDTO } from "../dtos/request/GiaoDichMuaBanSanPham.dto";
import { Sender } from "../dtos/request/Sender.dto";
import { ResponseDTO } from "../dtos/response.dto";
export class GiaoDichMuaBanSanPhamController {

    _giaoDichMuaBanSanPham_Service

    constructor() {
        this._giaoDichMuaBanSanPham_Service = new GiaoDichMuaBanSanPham_Service()
    }

    getContracts = async (req: Request, res: Response): Promise<Response> => {
        const responseDTO = new ResponseDTO();
        try {
            console.log("t1")
            const response = await this._giaoDichMuaBanSanPham_Service.getContracts()

            return res.status(200).json(
                responseDTO.success(
                    "Lay du lieu thanh cong",
                    response
                )
            );
        } catch (err) {
            console.log(err);
            return res.status(500).json(responseDTO.serverError());
        }
    };

    getContractById = async (req: Request, res: Response): Promise<Response> => {
        const responseDTO = new ResponseDTO();
        try {
            const { id } = req.params;

            if (!id) return res.status(400).json(responseDTO.badRequest());
            const response = await this._giaoDichMuaBanSanPham_Service.getContractById(Number(id))

            if(response)
                return res.status(200).json(
                    responseDTO.success(
                        "Lay du lieu thanh cong.",
                        response
                    )
                )

            return res.status(400).json(responseDTO.badRequest());
        } catch (err) {
            console.log(err);
            return res.status(500).json(responseDTO.serverError());
        }
    };

    addContract = async (req: Request, res: Response): Promise<Response> => {
        const responseDTO = new ResponseDTO();
        try {
            const data: GiaoDichMuaBanSanPhamDTO = {
                ...req.body,
            };

            let sender: Sender;

            if (data.wallet_NguoiTao) {
                sender = {
                    wallet: data.wallet_NguoiTao,
                    password: data.password,
                };
                delete data.wallet_NguoiTao;
                const repsonse = await this._giaoDichMuaBanSanPham_Service.addContract(data, sender)
                if (repsonse) {
                    return res.status(200).json(
                        responseDTO.success(
                            'Them du lieu thanh cong',
                            repsonse
                        )
                    )
                }
            }
            return res.status(400).json(responseDTO.badRequest());
        } catch (err: any) {
            const error = err.data ? Object.values<any>(err.data)[0].reason : err;
            console.log(error);
            return res.status(500).json(responseDTO.responseWithOther(500, error));
        }
    };
}
