import { GiaiDichMuaBanLua_Service } from "./giaodichmuaban_lua.service";
import {
  LoHangSanPham,
  LoHangSanPhamContract,
} from "./../contracts/LoHangSanPham.contract";
import {
  GiaoDichMuaBanSanPham,
  GiaoDichMuaBanSanPhamContract,
} from "./../contracts/GiaoDichMuaBanSanPham.contract";
import { BaseService } from "./base/base.service";
import { GiaoDichMuaBanSanPhamDTO } from "../dtos/request/GiaoDichMuaBanSanPham.dto";
import { Sender } from "../dtos/request/Sender.dto";

export class GiaoDichMuaBanSanPham_Service {
  private _giaoDichMuaBanSanPhamContract;
  private _loHangSanPhamContract;
  private _giaoDichMuaBanLuaService;
  constructor() {
    this._giaoDichMuaBanSanPhamContract = new GiaoDichMuaBanSanPhamContract();
    this._loHangSanPhamContract = new LoHangSanPhamContract();
    this._giaoDichMuaBanLuaService = new GiaiDichMuaBanLua_Service();
  }

  getContracts = async (limit = 10, page = 1) => {
    const giaoDichMuaBanSanPham =
      await this._giaoDichMuaBanSanPhamContract.getContracts(
        "SuKienThemGiaoDich"
      );
    const results = [];
    if (giaoDichMuaBanSanPham && giaoDichMuaBanSanPham.length > 0) {
      const totalPage =
        limit != 0 ? Math.ceil(giaoDichMuaBanSanPham.length / limit) : 1;
      const startIndex = (page - 1) * limit;
      const endIndex =
        startIndex + limit > giaoDichMuaBanSanPham.length
          ? giaoDichMuaBanSanPham.length
          : startIndex + limit;
      const giaoDichMuaBanSanPhamLimit =
        startIndex == endIndex
          ? giaoDichMuaBanSanPham
          : giaoDichMuaBanSanPham.slice(startIndex, endIndex);
      for (const contract of giaoDichMuaBanSanPhamLimit) {
        const loHangSanPham = await this._loHangSanPhamContract.getContractById(
          contract.returnValues.id_LoHang
        );
        const chiTietGiaoDich: any = undefined;

        console.log(loHangSanPham);

        let giaoDich: any = {
          id_GiaoDich: contract.returnValues.id_GiaoDich,
          id_LoHangSanPham: contract.returnValues.id_LoHangSanPham,
          id_NguoiBan: contract.returnValues.id_NguoiBan,
          id_NguoiTieuDung: contract.returnValues.id_NguoiTieuDung,
          id_LoHang: contract.returnValues.id_LoHang,
          thoigianGiaoDich: contract.returnValues.ThoiGianGiaoDich,
          giaLoHang: contract.returnValues.GiaLoHang,
          id_GiaoDichMuaBanLua: contract.returnValues.id_GiaoDichMuaBanLua,
          soLuong: loHangSanPham.SoLuong,
          thoigianLoHang: loHangSanPham.ThoiGian,
        };

        if (chiTietGiaoDich) {
          giaoDich = {
            ...giaoDich,
            tenLoHang: chiTietGiaoDich.name_lohang,
            description_loHang: chiTietGiaoDich.description_lohang,
            description_giaoDich: chiTietGiaoDich.description_giaodich,
            image_loHang: chiTietGiaoDich.img_lohang,
            status_giaoDich: chiTietGiaoDich.status,
          };
        }
        results.push(giaoDich);
      }
      return {
        totalPage: totalPage,
        totalItem: giaoDichMuaBanSanPhamLimit.length,
        page: page,
        danhSachGiaoDich: results,
      };
    }

    return null;
  };

  addContract = async (data: GiaoDichMuaBanSanPhamDTO, sender: Sender) => {
    const giaoDichMuaBanSanPham_Data: GiaoDichMuaBanSanPham = {
      intProperties: [
        data.id_GiaoDich,
        data.id_NguoiTieuDung,
        data.id_NguoiBan,
        data.id_LoHangSanPham,
        data.giaLoHang,
        data.thoigianGiaoDich,
        data.id_giaoDichMuaBanLua,
      ],
      boolProperties: [
        data.xacNhanNguoiBan,
        data.xacNhanNguoiTieuDung,
        data.xacNhanHTX || false,
      ],
    };

    const loHangSanPham_Data: LoHangSanPham = {
      intProperties: [
        data.id_LoHangSanPham,
        data.id_NguoiTieuDung,
        data.id_NguoiBan,
        data.soluong,
        data.thoigianLoHang,
      ],
    };
    const resultLoHangSanPham = await this._loHangSanPhamContract.addContract(
      loHangSanPham_Data,
      sender
    );
    if (resultLoHangSanPham) {
      const resultGiaoDichLua =
        await this._giaoDichMuaBanSanPhamContract.addContract(
          giaoDichMuaBanSanPham_Data,
          sender
        );
      if (resultGiaoDichLua)
        return {
          ...data,
        };
      return null;
    }
    return null;
  };

  getContractById = async (id_GiaoDich: number) => {
    const giaoDichMuaBanSanPham =
      await this._giaoDichMuaBanSanPhamContract.getContractById(id_GiaoDich);
    if (giaoDichMuaBanSanPham) {
      const loHangSanPham = await this._loHangSanPhamContract.getContractById(
        giaoDichMuaBanSanPham.id_LoHang
      );
      const chiTietGiaoDich: any = undefined;
      if (loHangSanPham) {
        let giaoDich: any = {
          id_GiaoDich: giaoDichMuaBanSanPham.id_GiaoDich,
          id_LoHangSanPham: giaoDichMuaBanSanPham.id_LoHangSanPham,
          id_NguoiBan: giaoDichMuaBanSanPham.id_NguoiBan,
          id_NguoiTieuDung: giaoDichMuaBanSanPham.id_NguoiTieuDung,
          id_LoHang: giaoDichMuaBanSanPham.id_LoHang,
          id_GiaoDichMuaBanLua: loHangSanPham.id_GiaoDichMuaBanLua,
          thoigianGiaoDich: giaoDichMuaBanSanPham.ThoiGianGiaoDich,
          giaLoHang: giaoDichMuaBanSanPham.GiaLoHang,
          soLuong: loHangSanPham.SoLuong,
          thoigianLoHang: loHangSanPham.ThoiGian,
        };

        if (chiTietGiaoDich) {
          giaoDich = {
            ...giaoDich,
            tenLoHang: chiTietGiaoDich.name_lohang,
            description_loHang: chiTietGiaoDich.description_lohang,
            description_giaoDich: chiTietGiaoDich.description_giaodich,
            image_loHang: chiTietGiaoDich.img_lohang,
            status_giaoDich: chiTietGiaoDich.status,
          };
        }
        return giaoDich;
      }
      return null;
    }
    return null;
  };

  tracingContractByIdProduct = async (
    id: number,
    limit: number = 10,
    page: number = 1
  ) => {
    const giaoDichMuaBanSanPham =
      await this._giaoDichMuaBanSanPhamContract.getContractById(id);

    if (giaoDichMuaBanSanPham) {
      // const chiTietGiaoDichMuaBanSanPham =
      //   await this._GiaoDichMuaBanSanPhamRepository.findById(
      //     giaoDichMuaBanLua.id_GiaoDich
      //   );

      // if (!chiTietGiaoDichMuaBanSanPham) {
      //   return null;
      // }

      const loHangSanPham = await this._loHangSanPhamContract.getContractById(
        giaoDichMuaBanSanPham.id_LoHang
      );
      const chiTietGiaoDich: any = undefined;
      if (loHangSanPham) {
        let giaoDich: any = {
          id_GiaoDich: giaoDichMuaBanSanPham.id_GiaoDich,
          id_LoHangSanPham: giaoDichMuaBanSanPham.id_LoHangSanPham,
          id_NguoiBan: giaoDichMuaBanSanPham.id_NguoiBan,
          id_NguoiTieuDung: giaoDichMuaBanSanPham.id_NguoiTieuDung,
          id_LoHang: giaoDichMuaBanSanPham.id_LoHang,
          id_GiaoDichMuaBanLua: loHangSanPham.id_GiaoDichMuaBanLua,
          thoigianGiaoDich: giaoDichMuaBanSanPham.ThoiGianGiaoDich,
          giaLoHang: giaoDichMuaBanSanPham.GiaLoHang,
          soLuong: loHangSanPham.SoLuong,
          thoigianLoHang: loHangSanPham.ThoiGian,
        };

        if (chiTietGiaoDich) {
          giaoDich = {
            ...giaoDich,
            tenLoHang: chiTietGiaoDich.name_lohang,
            description_loHang: chiTietGiaoDich.description_lohang,
            description_giaoDich: chiTietGiaoDich.description_giaodich,
            image_loHang: chiTietGiaoDich.img_lohang,
            status_giaoDich: chiTietGiaoDich.status,
          };
        }

        let tracingRiceContract = await this._giaoDichMuaBanLuaService.TracingContractByIdRice(parseInt(giaoDichMuaBanSanPham.id_GiaoDichMuaBanLua)) as any;

        if (tracingRiceContract) {
          delete tracingRiceContract.total;
    
          return {
            total: tracingRiceContract ? 4 : 1,
            hoatDongMuaBanSanPham: giaoDich,
            ...tracingRiceContract.hoatdong
          }
        }
    
        return {
          total: tracingRiceContract ? 4 : 1,
          hoatDongMuaBanSanPham: giaoDich,
        }
      }

      return null;
    }
  };
}
