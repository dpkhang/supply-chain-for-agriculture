import { lohangvattuRepository } from "../repositories/lohang_vattu.repository";
import {
  LoHangVatTu,
  LoHangVatTuContract,
} from "./../contracts/LoHangVatTu.contract";
import { GiaoDichMuaBanVatTu } from "./../contracts/GiaoDichMuaBanVatTu.contract";
import { GiaoDichMuaBanVatTuDTO } from "./../dtos/request/GiaoDichMuaBanVatTu.dto";
import { BaseService } from "./base/base.service";
import { GiaoDichMuaBanVatTuContract } from "../contracts/GiaoDichMuaBanVatTu.contract";
import { Sender } from "../dtos/request/Sender.dto";
import { Giaodichmuaban_vattuRepositoty } from "../repositories/giaodichmuaban_vattu.repository";

export class GiaoDichMuaBanVatTu_Service extends BaseService {
  private _GiaoDichMuaBanVatTuContract;
  private _LoHangVatTu;
  private _GiaoDichVatTu_Repository;

  constructor() {
    const giaodichmuabanVatTuRepository = new Giaodichmuaban_vattuRepositoty();
    super(giaodichmuabanVatTuRepository);
    this._GiaoDichMuaBanVatTuContract = new GiaoDichMuaBanVatTuContract();
    this._GiaoDichVatTu_Repository = giaodichmuabanVatTuRepository;
    this._LoHangVatTu = new LoHangVatTuContract();
  }

  getContracts = async (limit: number = 10, page: number = 1) => {
    const giaoDichMuaVatTu =
      await this._GiaoDichMuaBanVatTuContract.getContracts("SuKienGiaoDich1");

    const results = [];

    if (giaoDichMuaVatTu && giaoDichMuaVatTu?.length > 0) {
      const totalPage =
        limit != 0 ? Math.ceil(giaoDichMuaVatTu.length / limit) : 1;
      const startIndex = (page - 1) * limit;
      const endIndex =
        startIndex + limit > giaoDichMuaVatTu.length
          ? giaoDichMuaVatTu.length
          : startIndex + limit;
      const giaoDichMuaVatTuLimit =
        startIndex == endIndex
          ? giaoDichMuaVatTu
          : giaoDichMuaVatTu.slice(startIndex, endIndex);

      for (let contract of giaoDichMuaVatTuLimit) {
        const lohangVatTu = await this._LoHangVatTu.getContractById(
          contract.returnValues.id_LoHangVatTu
        );
        const chiTietGiaoDich = await this._GiaoDichVatTu_Repository.findById(
          contract.returnValues.id_GiaoDich
        );
        let giaoDich: any = {
          id_GiaoDich: contract.returnValues.id_GiaoDich,
          id_LoHangVatTu: contract.returnValues.id_LoHangVatTu,
          id_XaVien: contract.returnValues.id_XaVien,
          id_NhaCungCap: contract.returnValues.id_NhaCungCap,
          thoigianGiaoDich: contract.returnValues.ThoiGianGiaoDich,
          giaLoHang: contract.returnValues.GiaLoHang,
          id_Muavu: lohangVatTu.id_Muavu,
          id_VatTu: lohangVatTu.id_VatTu,
          TenVatTu: lohangVatTu.TenVatTu,
          thoigianLoHang: lohangVatTu.ThoiGian,
          soluong: lohangVatTu.SoLuong,
        };
        if (chiTietGiaoDich) {
          giaoDich = {
            ...giaoDich,
            description_giaodich: chiTietGiaoDich.description_giaodich,
            statusGiaodich: chiTietGiaoDich.status,
            id_lichMuaVu: chiTietGiaoDich.id_lichmuavu,
          };
        }
        results.push(giaoDich);
      }
      return {
        totalPage: totalPage,
        totalItem: giaoDichMuaVatTuLimit.length,
        page: page,
        danhSachGiaoDich: results,
      };
    }
    return null;
  };

  addContract = async (data: GiaoDichMuaBanVatTuDTO, sender: Sender) => {
    const giaodichMuaBanVatTu_Data: GiaoDichMuaBanVatTu = {
      intProperties: [
        data.id_XaVien,
        data.id_NhaCungCap,
        data.id_GiaoDich,
        data.id_LoHangVatTu,
        data.giaLoHang,
        data.thoigianGiaoDich,
      ],
      boolProperties: [
        data.xacnhanXaVien,
        data.xacnhanNhaCungCap,
        data.xacnhanHTX,
      ],
    };

    const lohangVatTu_Data: LoHangVatTu = {
      intProperties: [
        data.id_LoHangVatTu,
        data.id_MuaVu,
        data.id_VatTu,
        data.soluong,
        data.thoigianLoHang,
      ],
      stringProperties: [data.tenVatTu],
    };

    console.log(lohangVatTu_Data);
    const resultLoHangVatTu = await this._LoHangVatTu.addContract(
      lohangVatTu_Data,
      sender
    );
    if (resultLoHangVatTu) {
      const resultGiaoDichMuaBanVatTu =
        await this._GiaoDichMuaBanVatTuContract.addContract(
          giaodichMuaBanVatTu_Data,
          sender
        );
      if (resultGiaoDichMuaBanVatTu)
        return {
          ...data,
        };
      return null;
    }
    return null;
  };

  getContractById = async (id_GiaoDich: number) => {
    const giaodichMuaBanVatTu =
      await this._GiaoDichMuaBanVatTuContract.getContractById(id_GiaoDich);
    if (giaodichMuaBanVatTu) {
      const lohangVatTu = await this._LoHangVatTu.getContractById(
        giaodichMuaBanVatTu.id_LoHangVatTu
      );
      const chiTietGiaoDich = await this._GiaoDichVatTu_Repository.findById(
        giaodichMuaBanVatTu.id_GiaoDich
      );
      if (lohangVatTu) {
        let giaoDich: any = {
          id_GiaoDich: giaodichMuaBanVatTu.id_GiaoDich,
          id_LoHangVatTu: giaodichMuaBanVatTu.id_LoHangVatTu,
          id_XaVien: giaodichMuaBanVatTu.id_XaVien,
          id_NhaCungCap: giaodichMuaBanVatTu.id_NhaCungCap,
          thoigianGiaoDich: giaodichMuaBanVatTu.ThoiGianGiaoDich,
          giaLoHang: giaodichMuaBanVatTu.GiaLoHang,
          id_Muavu: lohangVatTu.id_Muavu,
          id_VatTu: lohangVatTu.id_VatTu,
          TenVatTu: lohangVatTu.TenVatTu,
          thoigianLoHang: lohangVatTu.ThoiGian,
          soluong: lohangVatTu.SoLuong,
        };

        if (chiTietGiaoDich) {
          giaoDich = {
            ...giaoDich,
            description_giaodich: chiTietGiaoDich.description_giaodich,
            statusGiaodich: chiTietGiaoDich.status,
            id_lichMuaVu: chiTietGiaoDich.id_lichmuavu,
          };
        }

        return giaoDich;
      }
      return null;
    }
    return null;
  };
}
