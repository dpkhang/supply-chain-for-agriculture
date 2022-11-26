import { BaseService } from "./base/base.service";
import { HoatDongNhatKyContract } from "../contracts/HoatDongNhatKy.contract";
import { HoatDongNhatKyDTO } from "../dtos/request/HoatDongNhatKy.dto";
import { NhatkydongruongRepository } from "../repositories/nhatkydongruong.repository";
import { LoHangLuaContract } from "../contracts/LoHangLua.contract";
import { Sender } from "../dtos/request/Sender.dto";

export class HoatdongnhatkyService extends BaseService {
  private _HoatDongNhatKyContract;
  private _LoHangLuaContract;
  private _HoatDongNhatKyRepository;

  constructor() {
    const hoatdongnhatkyContract = new HoatDongNhatKyContract();
    const hoatDongNhatKyRepository = new NhatkydongruongRepository();
    const loHangLuaContract = new LoHangLuaContract();
    super(hoatDongNhatKyRepository);
    this._HoatDongNhatKyContract = hoatdongnhatkyContract;
    this._LoHangLuaContract = loHangLuaContract;
    this._HoatDongNhatKyRepository = hoatDongNhatKyRepository;
  }

  createContract = async (data: HoatDongNhatKyDTO) => {
    try {
      const hoatDongNhatKyProperties = [
        data.id_NhatKyDongRuong,
        data.id_LichMuaVu,
        data.id_ThuaDat,
        data.id_XaVien,
        data.id_HoatDongMuaVu,
        data.ThoiGian,
      ];

      const dongThuanProperties = [data.XaVienXacNhan, data.HopTacXaXacNhan];

      const sender: Sender = {
        wallet: data.wallet_XaVien,
        password: data.password_Wallet,
      };

      await this._HoatDongNhatKyContract.addContract(
        {
          intProperties: hoatDongNhatKyProperties,
          boolProperties: dongThuanProperties,
        },
        sender
      );
    } catch (err) {
      throw err;
    }
  };

  getContracts = async (limit: number = 10, page: number = 1) => {
    try {
      const danhSachHoatDongNhatKy =
        (await this._HoatDongNhatKyContract.getContracts(
          "SuKienThemHoatDongNhatKy"
        )) as any;

      if (!danhSachHoatDongNhatKy) {
        return null;
      }

      const totalPage =
        limit != 0 ? Math.ceil(danhSachHoatDongNhatKy.length / limit) : 1;

      const startIndex = (page - 1) * limit;
      const endIndex =
        startIndex + limit > danhSachHoatDongNhatKy.length
          ? danhSachHoatDongNhatKy.length
          : startIndex + limit;

      const danhSachHoatDongNhatKyLimit =
        startIndex == endIndex
          ? danhSachHoatDongNhatKy
          : danhSachHoatDongNhatKy.slice(startIndex, endIndex);

      let listResult: any[] = [];
      danhSachHoatDongNhatKyLimit.forEach((e: any) => {
        listResult.push({
          id_NhatKyDongRuong: e.returnValues.id_NhatKyDongRuong,
          id_LichMuaVu: e.returnValues.id_LichMuaVu,
          id_ThuaDat: e.returnValues.id_ThuaDat,
          id_XaVien: e.returnValues.id_XaVien,
          ThoiGian: e.returnValues.ThoiGian,
        });
      });

      return {
        totalPage: totalPage,
        totalItem: danhSachHoatDongNhatKyLimit.length,
        page: page,
        danhSachHoatDongNhatKy: listResult,
      };
    } catch (err) {
      throw err;
    }
  };

  getContractById = async (id_HoatDongNhatKy: number) => {
    try {
      const hoatDongNhatKy = await this._HoatDongNhatKyContract.getContractById(
        id_HoatDongNhatKy
      );

      if (
        hoatDongNhatKy.id_NhatKyDongRuong == 0 ||
        hoatDongNhatKy.id_HoatDongNhatKy == 0 ||
        hoatDongNhatKy.ThoiGian == 0
      )
        return null;

      if (hoatDongNhatKy) {
        const hoatDongNhatKyResult = {
          id_nhatkydongruong: hoatDongNhatKy.id_NhatKyDongRuong,
          id_lichmuavu: hoatDongNhatKy.id_LichMuaVu,
          id_thuadat: hoatDongNhatKy.id_ThuaDat,
          id_xavien: hoatDongNhatKy.id_XaVien,
          id_hoatdongmuavu: hoatDongNhatKy.id_HoatDongMuaVu,
          ThoiGian: hoatDongNhatKy.ThoiGian
        };

        return hoatDongNhatKyResult;
      }

      return null;
    } catch (err) {
      throw err;
    }
  };

  getContractsByIdNhatKy = async (
    id_xaVien: number,
    id_lichMuaVu: number,
    limit: number = 0,
    page: number = 1
  ) => {
    try {
      const danhSachHoatDongNhatKy =
        (await this._HoatDongNhatKyContract.getContracts(
          "SuKienThemHoatDongNhatKy"
        )) as any;

      if (!danhSachHoatDongNhatKy) {
        return null;
      }

      let listResult = [];

      //filter
      for (let hoatDongNhatKy of danhSachHoatDongNhatKy) {
        if (
          id_xaVien == hoatDongNhatKy.returnValues.id_XaVien &&
          id_lichMuaVu == hoatDongNhatKy.returnValues.id_LichMuaVu
        ) {
          listResult.push({
            id_nhatkydongruong: hoatDongNhatKy.returnValues.id_NhatKyDongRuong,
            id_lichmuavu: hoatDongNhatKy.returnValues.id_LichMuaVu,
            id_thuadat: hoatDongNhatKy.returnValues.id_ThuaDat,
            id_xavien: hoatDongNhatKy.returnValues.id_XaVien,
            id_hoatdongmuavu: hoatDongNhatKy.returnValues.id_HoatDongMuaVu,
            ThoiGian: hoatDongNhatKy.returnValues.ThoiGian,
          });
        }
      }

      const totalPage = limit != 0 ? Math.ceil(listResult.length / limit) : 1;

      const startIndex = (page - 1) * limit;
      const endIndex =
        startIndex + limit > listResult.length
          ? listResult.length
          : startIndex + limit;
      const danhSachHoatDongNhatKyLimit =
        startIndex == endIndex
          ? listResult
          : listResult.slice(startIndex, endIndex);

      let endListResult = [];

      for (let element of danhSachHoatDongNhatKyLimit) {
        const id_nhatKyDongRuong = element.id_nhatkydongruong;
        let hoatDongNhatKyChiTiet =
          await this._HoatDongNhatKyRepository.findById(id_nhatKyDongRuong);

        if (!hoatDongNhatKyChiTiet) {
          hoatDongNhatKyChiTiet = {
            date_start: null,
            date_end: null,
            type: null,
            description: null,
            status: null,
            created_at: null,
            updated_at: null,
          };
        }

        endListResult.push({
          ...element,
          date_start: hoatDongNhatKyChiTiet.date_start,
          date_end: hoatDongNhatKyChiTiet.date_end,
          type: hoatDongNhatKyChiTiet.type,
          description: hoatDongNhatKyChiTiet.description,
          status: hoatDongNhatKyChiTiet.status,
          created_at: hoatDongNhatKyChiTiet.created_at,
          updated_at: hoatDongNhatKyChiTiet.updated_at,
        });
      }
      return {
        totalPage: totalPage,
        totalItem: danhSachHoatDongNhatKyLimit.length,
        page: page,
        danhSachHoatDongNhatKy: endListResult,
      };
    } catch (err) {
      throw err;
    }
  };

  getContractByIdLoHangLua = async (
    id_loHangLua: number,
    limit: number,
    page: number
  ) => {
    //get information of lo hang lua
    const loHangLua = await this._LoHangLuaContract.getContractById(
      id_loHangLua
    );

    if (loHangLua.id_LoHangLua == 0) {
      return null;
    }

    const id_xaVien = loHangLua.id_XaVien;
    const id_lichMuaVu = loHangLua.id_LichMuaVu;

    return await this.getContractsByIdNhatKy(
      id_xaVien,
      id_lichMuaVu,
      limit,
      page
    );
  };
}
