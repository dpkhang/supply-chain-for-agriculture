import { Request, Response } from "express";
import { ResponseDTO } from "../dtos/response.dto";
import { GiaoDichMuaBanLuaGiongService } from "../services/giaoDichMuaBanLuaGiong.service";

export class GiaoDichMuaBanGiongLuaController {
  private _GiaoDichMuaBanLuaGiongService;

  constructor() {
    this._GiaoDichMuaBanLuaGiongService = new GiaoDichMuaBanLuaGiongService();
  }

  createContract = async (req: Request, res: Response): Promise<Response> => {
    const responseDTO = new ResponseDTO();

    try {
      const ReqData = req.body;

      await this._GiaoDichMuaBanLuaGiongService.createContract(ReqData);

      delete ReqData.wallet_XaVien;

      return res
        .status(200)
        .json(
          responseDTO.success("Lưu dữ liệu lên Blockchain thành công", ReqData)
        );
    } catch (err: any) {
      const error = err.data ? Object.values<any>(err.data)[0].reason : err;
      console.log(error);
      return res.status(500).json(responseDTO.responseWithOther(500, error));
    }
  };

  getContractById = async (req: Request, res: Response) => {
    const responseDTO = new ResponseDTO();
    try {
      const id = parseInt(req.params.id);
      const result = await this._GiaoDichMuaBanLuaGiongService.getContractById(
        id
      );

      if (!result) {
        return res
          .status(200)
          .json(
            responseDTO.success("Giao dich mua ban lua giong chua ton tai")
          );
      }

      return res
        .status(200)
        .json(responseDTO.success("Lay du lieu thanh cong", result));
    } catch (err) {
      console.log(err);
      return res.status(500).json(responseDTO.serverError());
    }
  };
}
