import { Request, Response } from "express";
import { ResponseDTO } from "../dtos/response.dto";
import { Account_Service } from "../services/account.service";
export class AccountController {
  private _account;

  constructor() {
    this._account = new Account_Service();
  }

  importRawKey = async (req: Request, res: Response): Promise<Response> => {
    const responseDTO = new ResponseDTO();
    try {
      const result = await this._account.importRawKey(req.body);
      return res
        .status(200)
        .json(responseDTO.success("Luu private key thanh cong", result));
    } catch (err) {
      console.log(err);
      return res.status(500).json(responseDTO.serverError());
    }
  };

  createWallet = async (req: Request, res: Response): Promise<Response> => {
    const responseDTO = new ResponseDTO();
    try {
      this._account.createWallet();
      return res
        .status(200)
        .json(responseDTO.success("Luu private key thanh cong"));
    } catch (err) {
      console.log(err);
      return res.status(500).json(responseDTO.serverError());
    }
  };

  checkHealthy = async (req: Request, res: Response) => {
    const responseDTO = new ResponseDTO();
    try {
      return res.status(200).json(responseDTO.success("Ok, good"));
    } catch (err) {
      console.log(err);
      return res.status(500).json(responseDTO.serverError());
    }
  };
}
