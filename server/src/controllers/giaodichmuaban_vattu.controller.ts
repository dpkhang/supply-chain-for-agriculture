import { Request, Response } from "express";
import { Sender } from "../dtos/request/Sender.dto";
import { ResponseDTO } from "../dtos/response.dto";
import { GiaoDichMuaBanVatTu_Service } from "../services/giaodichmuaban_vattu.service";
export class Giaodichmuaban_vattuController {
  private _GiaoDichMuaBanVatTu_Service;

  constructor() {
    this._GiaoDichMuaBanVatTu_Service = new GiaoDichMuaBanVatTu_Service();
  }

  getContracts = async (req: Request, res: Response): Promise<Response> => {
    const responseDTO = new ResponseDTO();
    try {
      const limit = parseInt((req.query.limit ?? "0") as string);
      const page = parseInt((req.query.page ?? "1") as string);
      const response = await this._GiaoDichMuaBanVatTu_Service.getContracts(
        limit,
        page
      );

      return res
        .status(200)
        .json(responseDTO.success("Lay du lieu thanh cong", response));
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
      const response = await this._GiaoDichMuaBanVatTu_Service.getContractById(
        Number(id)
      );

      if (response)
        return res
          .status(200)
          .json(responseDTO.success("Lay du lieu thanh cong.", response));

      return res.status(400).json(responseDTO.badRequest());
    } catch (err) {
      console.log(err);
      return res.status(500).json(responseDTO.serverError());
    }
  };

  addContract = async (req: Request, res: Response): Promise<Response> => {
    const responseDTO = new ResponseDTO();
    const data = {
      ...req.body,
    };
    try {
      const sender: Sender = {
        wallet: req.body.wallet_NguoiTao,
        password: req.body.password,
      };

      const repsonse = await this._GiaoDichMuaBanVatTu_Service.addContract(
        data,
        sender
      );
      if (repsonse) {
        return res
          .status(200)
          .json(responseDTO.success("Them du lieu thanh cong", repsonse));
      }
      return res.status(400).json(responseDTO.badRequest());
    } catch (err: any) {
      console.log(err);
      const error = err.data ? Object.values<any>(err.data)[0].reason : err;
      console.log(error);
      return res.status(500).json(responseDTO.responseWithOther(500, error));
    }
  };
}
