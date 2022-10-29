import { Request, Response } from "express";
import { ResponseDTO } from "../dtos/response.dto";
import { GiaiDichMuaBanLua_Service } from "../services/giaodichmuaban_lua.service";

export class TracingController {
  private _giaoDichMuaBanLuaService;

  constructor() {
    this._giaoDichMuaBanLuaService = new GiaiDichMuaBanLua_Service();
  }

  TracingRiceProduct = async (req: Request, res: Response) => {
    const responseDTO = new ResponseDTO();
    try {
      //get data
      const id_loHangLua = parseInt(req.params.id);
      const limit = parseInt((req.query.limit as string) || "10");
      const page = parseInt((req.params.page as string) || "1");

      //calculator data
      const result =
        await this._giaoDichMuaBanLuaService.TracingContractByIdRice(
          id_loHangLua,
          limit,
          page
        );

      //return
      if (result) {
        return res
          .status(200)
          .json(responseDTO.success("Truy xuất dữ liệu thành công.", result));
      }

      return res
          .status(400)
          .json(responseDTO.badRequest());
    } catch (err: any) {
      console.log(err);
      return res.status(500).json(responseDTO.serverError());
    }
  }
}
