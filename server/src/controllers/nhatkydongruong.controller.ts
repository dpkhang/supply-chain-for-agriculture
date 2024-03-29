import { Request, Response } from "express";
import { HoatDongNhatKyDTO } from "../dtos/request/HoatDongNhatKy.dto";
import { ResponseDTO } from "../dtos/response.dto";
import { HoatdongnhatkyService } from "../services/nhatkydongruong.service";
import { VatTuSuDungService } from "../services/VatTuSuDung.service";
export class HoatdongnhatkyController {
  private _hoatdongnhatkyService;
  private _vatTuSuDungService;

  constructor() {
    this._hoatdongnhatkyService = new HoatdongnhatkyService();
    this._vatTuSuDungService = new VatTuSuDungService();
  }

  getContracts = async (req: Request, res: Response): Promise<Response> => {
    const responseDTO = new ResponseDTO();
    try {
      const limit = parseInt((req.query.limit ?? "0") as string);
      const page = parseInt((req.query.page ?? "1") as string);

      const result = await this._hoatdongnhatkyService.getContracts(
        limit,
        page
      );

      return res
        .status(200)
        .json(responseDTO.success("Lay du lieu thanh cong", result));
    } catch (err) {
      console.log(err);
      return res.status(500).json(responseDTO.serverError());
    }
  };

  createContract = async (req: Request, res: Response): Promise<Response> => {
    const responseDTO = new ResponseDTO();

    try {
      const ReqData = req.body;

      const hoatDongNhatKyData: HoatDongNhatKyDTO = {
        id_NhatKyDongRuong: ReqData.id_NhatKyDongRuong,
        id_LichMuaVu: ReqData.id_LichMuaVu,
        id_ThuaDat: ReqData.id_ThuaDat,
        id_XaVien: ReqData.id_XaVien,
        id_HoatDongMuaVu: ReqData.id_HoatDongMuaVu,
        ThoiGian: ReqData.ThoiGian,
        wallet_XaVien: ReqData.wallet_XaVien,
        password_Wallet: ReqData.password_Wallet,
        XaVienXacNhan: ReqData.xaVienXacNhan,
        HopTacXaXacNhan: ReqData.hopTacXaXacNhan
      };

      await this._hoatdongnhatkyService.createContract(hoatDongNhatKyData);

      return res
        .status(200)
        .json(
          responseDTO.success("Lưu dữ liệu lên Blockchain thành công", ReqData)
        );
    } catch (err: any) {
      //const error = err.data ? Object.values<any>(err.data)[0].reason : err;
      //console.log(error);
      console.log(err);
      return res.status(500).json(responseDTO.responseWithOther(500, err));
    }
  };

  getContractById = async (req: Request, res: Response): Promise<Response> => {
    const responseDTO = new ResponseDTO();
    try {
      const id = parseInt(req.params.id);
      const result = await this._hoatdongnhatkyService.getContractById(id);
      const danhSachVatTuSuDung =
        await this._vatTuSuDungService.getContractsByIdHoatDongNhatKy(id);

      const endResult = {
        ...result,
        danhSachVatTuSuDung: danhSachVatTuSuDung,
      };

      if (!result) {
        return res
          .status(200)
          .json(responseDTO.success("Hoat dong nhat ky chua ton tai"));
      }

      return res
        .status(200)
        .json(responseDTO.success("Lay du lieu thanh cong", endResult));
    } catch (err) {
      console.log(err);
      return res.status(500).json(responseDTO.serverError());
    }
  };

  getContractsByIdNhatKy = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const responseDTO = new ResponseDTO();
    try {
      const id_xaVien = parseInt((req.query.id_xaVien ?? "0") as string);
      const id_lichMuaVu = parseInt((req.query.id_lichMuaVu ?? "0") as string);
      const limit = parseInt((req.query.limit ?? "0") as string);
      const page = parseInt((req.query.page ?? "1") as string);

      const result = await this._hoatdongnhatkyService.getContractsByIdNhatKy(
        id_xaVien,
        id_lichMuaVu,
        limit,
        page
      );

      if (!result) {
        return res
          .status(200)
          .json(responseDTO.success("Nhat ky hoat dong chua ton tai"));
      }

      return res
        .status(200)
        .json(responseDTO.success("Lay du lieu thanh cong", result));
    } catch (err) {
      console.log(err);
      return res.status(500).json(responseDTO.serverError());
    }
  };

  getContractsByIdLoHangLua = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const responseDTO = new ResponseDTO();
    try {
      const id_loHangLua = parseInt((req.query.id_loHangLua ?? "0") as string);
      const limit = parseInt((req.query.limit ?? "0") as string);
      const page = parseInt((req.query.page ?? "1") as string);

      const result = await this._hoatdongnhatkyService.getContractByIdLoHangLua(
        id_loHangLua,
        limit,
        page
      );

      if (!result) {
        return res
          .status(200)
          .json(responseDTO.success("Lo hang lua chua ton tai"));
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
