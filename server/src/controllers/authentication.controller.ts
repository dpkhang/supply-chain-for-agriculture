import { Request, Response } from "express";
import { ResponseDTO } from "../dtos/response.dto";
import { createToken } from "../helpers/auth.helper";
import { NhaCungCapVatTuService } from "../services/nhaCungCapVatTu.service";
import { ThuongLaiService } from "../services/thuongLai.service";
import { UserService } from "../services/user.service";
import { XaVienService } from "../services/xaVien.service";
const bcrypt = require("bcrypt");
const secretKey = process.env.SECRET_KEY;

export class AuthenticationController {
  private _userService;
  private _xaVienService;
  private _thuongLaiService;
  private _nhaCungCapService;

  constructor() {
    this._userService = new UserService();
    this._xaVienService = new XaVienService();
    this._thuongLaiService = new ThuongLaiService();
    this._nhaCungCapService = new NhaCungCapVatTuService();
  }

  authentication = async (req: Request, res: Response): Promise<Response> => {
    const responseDTO = new ResponseDTO();
    try {
      //get data
      const { username, password } = req.body;

      //check data
      const check = await this._userService.login(username, password);
      if (check) {
        const userInfor = await this._userService.findUserDetailsbyUserName(
          username
        );
        //create token
        const payload = {
          id: userInfor.id_user,
          userType: userInfor.userType,
          username: userInfor.username,
        };
        const token = await createToken(payload, secretKey as string, "3d");
        return res.status(200).json(responseDTO.success("Dang nhap thanh cong", {
            accessToken: token
        }));
      }

      return res.status(401).json(responseDTO.unauthorization());
    } catch (err: any) {
      console.log(err);
      return res.status(500).json(responseDTO.serverError());
    }
  };

  register = async (req: Request, res: Response): Promise<Response> => {
    const responseDTO = new ResponseDTO();
    try {
      //get data
      const userData: {
        username: string;
        password: string;
        fullname: string;
        email: string;
        phone_number: string;
        address: string;
        wallet: string;
        dob: string;
      } = req.body;

      userData.password = await bcrypt.hash(userData.password, 10);
      //create account
      const userCreated = await this._userService.create(userData);
      console.log(userCreated.null); //get id
      const userInfor = await this._userService.findByUserName(
        userData.username
      );
      //create type of user
      const userType = req.body.userType;
      switch (userType) {
        case "xa-vien": {
          const userTypeInfo = {
            id_user: userInfor.id_user,
            id_hoptacxa: req.body.id_hoptacxa,
          };
          this._xaVienService.create(userTypeInfo);
          break;
        }

        case "thuong-lai": {
          const userTypeInfo = {
            id_user: userInfor.id_user,
            name_thuonglai: req.body.name_thuonglai,
          };
          this._thuongLaiService.create(userTypeInfo);
          break;
        }

        case "nha-cung-cap": {
          const userTypeInfo = {
            id_user: userInfor.id_user,
            name_daily: req.body.name_daily,
          };
          this._nhaCungCapService.create(userTypeInfo);
          break;
        }

        case "nguoi-dung-cuoi": {
          const userTypeInfo = {
            id_user: userInfor.id_user,
          };
          break;
        }
      }

      //create token
      const token = await createToken(
        {
          id: userCreated,
          userType: userType,
          username: userData.username,
        },
        secretKey as string,
        "3d"
      );

      //return token
      return res.status(200).json(
        responseDTO.success("Tao tai khoan thanh cong", {
          accessToken: token,
        })
      );
    } catch (err: any) {
      console.log(err);
      return res.status(500).json(responseDTO.serverError());
    }
  };
}
