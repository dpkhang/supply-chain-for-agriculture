import {
  LoHangLua,
  LoHangLuaContract,
} from "./../contracts/LoHangLua.contract";
import { GiaoDichMuaBanLua } from "./../contracts/GiaoDichMuaBanLua.contract";
import { Giaodichmuaban_luaRepository } from "./../repositories/giaodichmuaban_lua.repository";
import { BaseService } from "./base/base.service";
import { GiaoDichMuaBanLuaContract } from "../contracts/GiaoDichMuaBanLua.contract";
import { GiaoDichMuaBanLuaDTO } from "../dtos/request/GiaoDichMuaBanLua.dto";
import { Sender } from "../dtos/request/Sender.dto";
import { lohangluaRepository } from "../repositories/lohang_lua.repository";
import { HoatdongnhatkyService } from "./nhatkydongruong.service";
import { VatTuSuDungService } from "./VatTuSuDung.service";
import { GiaoDichMuaBanLuaGiongService } from "./giaoDichMuaBanLuaGiong.service";

export class GiaiDichMuaBanLua_Service extends BaseService {
  //_giaodichmuaban_luaService
  private _GiaoDichMuaBanLuaContract;
  private _GiaoDichMuaBanLuaRepository;
  private _LoHangLuaRepository;
  private _LoHangLua;
  private _NhatKyDongRuongService;
  private _VatTuSuDungService;
  private _GiaoDichMuaBanLuaGiongService;

  constructor() {
    const giaoDichMuaBanLuaRepository = new Giaodichmuaban_luaRepository();
    const LoHangLuaRepository = new lohangluaRepository();
    const giaoDichMuaBanLuaContract = new GiaoDichMuaBanLuaContract();
    const loHangLua = new LoHangLuaContract();
    const nhatKyDongRuongService = new HoatdongnhatkyService();
    const vatTuSuDungService = new VatTuSuDungService();
    const giaoDichMuaBanLuaGiong = new GiaoDichMuaBanLuaGiongService();
    super(giaoDichMuaBanLuaRepository);
    this._GiaoDichMuaBanLuaContract = giaoDichMuaBanLuaContract;
    this._GiaoDichMuaBanLuaRepository = giaoDichMuaBanLuaRepository;
    this._LoHangLuaRepository = LoHangLuaRepository;
    this._LoHangLua = loHangLua;
    this._NhatKyDongRuongService = nhatKyDongRuongService;
    this._VatTuSuDungService = vatTuSuDungService;
    this._GiaoDichMuaBanLuaGiongService = giaoDichMuaBanLuaGiong;
  }

  getContracts = async (limit = 10, page = 1) => {
    const giaoDichMuaBanLua =
      await this._GiaoDichMuaBanLuaContract.getContracts("SuKienGiaoDich");

    const results = [];

    if (giaoDichMuaBanLua && giaoDichMuaBanLua?.length > 0) {
      const totalPage =
        limit != 0 ? Math.ceil(giaoDichMuaBanLua.length / limit) : 1;
      const startIndex = (page - 1) * limit;
      const endIndex =
        startIndex + limit > giaoDichMuaBanLua.length
          ? giaoDichMuaBanLua.length
          : startIndex + limit;
      const giaoDichMuaBanLuaLimit =
        startIndex == endIndex
          ? giaoDichMuaBanLua
          : giaoDichMuaBanLua.slice(startIndex, endIndex);

      for (let contract of giaoDichMuaBanLuaLimit) {
        const lohangLua = await this._LoHangLua.getContractById(
          contract.returnValues.id_LoHangLua
        );
        let giaoDich: any = {
          id_GiaoDich: contract.returnValues.id_GiaoDich,
          id_LoHangLua: contract.returnValues.id_LoHangLua,
          id_XaVien: contract.returnValues.id_XaVien,
          id_ThuongLai: contract.returnValues.id_ThuongLai,
          thoigianGiaoDich: contract.returnValues.ThoiGianGiaoDich,
          giaLoHang: contract.returnValues.GiaLoHang,
          id_GiongLua: lohangLua.id_GiongLua,
          id_LichMuaVu: lohangLua.id_LichMuaVu,
          tenGiongLua: lohangLua.TenGiongLua,
          thoigianLoHang: lohangLua.ThoiGian,
          soluong: lohangLua.SoLuong,
        };

        results.push(giaoDich);
      }

      return {
        totalPage: totalPage,
        totalItem: giaoDichMuaBanLuaLimit.length,
        page: page,
        danhSachGiaoDich: results,
      };
    }
    return [];
  };

  TracingContractByIdRice = async (
    id: number,
    limit: number = 10,
    page: number = 1
  ) => {
    //get rice transaction
    const giaoDichMuaBanLua =
      await this._GiaoDichMuaBanLuaContract.getContractById(id);

    if (giaoDichMuaBanLua.id_GiaoDich == 0) {
      return [];
    }

    //get rice product
    const id_loHangLua = giaoDichMuaBanLua.id_LoHangLua;
    const loHangLua = await this._LoHangLua.getContractById(id_loHangLua);

    if (loHangLua.id_GiongLua == 0) {
      return [];
    }

    //get supply use
    const list_supply_use = await this._VatTuSuDungService.getContracts(
      999999,
      page
    );
    
    if (!list_supply_use) {
      return [];
    }

    //get activity logs
    const nhatKyDongRuong =
      await this._NhatKyDongRuongService.getContractByIdLoHangLua(
        id_loHangLua,
        100,
        1
      );

    if (!nhatKyDongRuong) {
      return [];
    }

    const hoatDongMuaBanLua = {
      id_giaodich: giaoDichMuaBanLua.id_GiaoDich,
      id_xavien: giaoDichMuaBanLua.id_XaVien,
      gialohang: giaoDichMuaBanLua.GiaLoHang,
      thoigiangiaodich: giaoDichMuaBanLua.ThoiGianGiaoDich,
      id_gionglua: loHangLua.id_GiongLua,
      id_lichmuavu: loHangLua.id_LichMuaVu,
      soluong: loHangLua.SoLuong,
      tengionglua: loHangLua.TenGiongLua,
    };

    let danhSachHoatDongNhatKy = nhatKyDongRuong
      ? nhatKyDongRuong.danhSachHoatDongNhatKy
      : [];

    for (let i = 0; i < danhSachHoatDongNhatKy.length; i++) {
      for (let j = i + 1; j < danhSachHoatDongNhatKy.length; j++) {
        const date1 = danhSachHoatDongNhatKy[i].ThoiGian;
        const date2 = danhSachHoatDongNhatKy[j].ThoiGian;
        if (date1 < date2) {
          const temp = danhSachHoatDongNhatKy[i];
          danhSachHoatDongNhatKy[i] = danhSachHoatDongNhatKy[j];
          danhSachHoatDongNhatKy[j] = temp;
        }
      }
    }

    //add supply use
    let danhSachHoatDongNhatKyChiTiet: any[] = [];
    for (let i = 0; i < danhSachHoatDongNhatKy.length; i++) {
      const id_nhatKy = danhSachHoatDongNhatKy[i].id_nhatkydongruong;
      let danhSachVatTuSuDung: any[] = [];
      if ((list_supply_use as any)?.danhSachVatTuSuDung.length > 0) {
        danhSachVatTuSuDung = (list_supply_use as any)?.danhSachVatTuSuDung.filter(
          (e: any) => {
            return e.id_HoatDongNhatKy == id_nhatKy;
          }
        );
      }

      const hoatDongNhatKyChiTiet = {
        ...danhSachHoatDongNhatKy[i],
        danhsachvattusudung: danhSachVatTuSuDung,
      };
      danhSachHoatDongNhatKyChiTiet.push(hoatDongNhatKyChiTiet);
    }

    //add seed rice transaction
    const HoatDongMuaBanGiongLua = await this._GiaoDichMuaBanLuaGiongService.getContractByLog(
      hoatDongMuaBanLua.id_lichmuavu,
      hoatDongMuaBanLua.id_xavien
    );

    if (!HoatDongMuaBanGiongLua) {
      return null;
    }

    return {
      total: 3,
      hoatdong: {
        hoatdongmuabanlua: hoatDongMuaBanLua,
        danhsachhoatdongnhatky: danhSachHoatDongNhatKyChiTiet,
        hoatDongMuaBanGiongLua: HoatDongMuaBanGiongLua
      }
    };
  };

  addContract = async (data: GiaoDichMuaBanLuaDTO, sender: Sender) => {
    const giaoDichMuaBanLua_Data: GiaoDichMuaBanLua = {
      intProperties: [
        data.id_XaVien,
        data.id_ThuongLai,
        data.id_GiaoDich,
        data.id_LoHangLua,
        data.giaLoHang,
        data.thoigianGiaoDich,
      ],
      boolProperties: [
        data.xacnhanXaVien,
        data.xacnhanThuongLai,
        data.xacnhanHTX,
      ],
    };

    const loHangLua_Data: LoHangLua = {
      intProperties: [
        data.id_XaVien,
        data.id_LoHangLua,
        data.id_GiongLua,
        data.id_LichMuaVu,
        data.soluong,
        data.thoigianLoHang,
        data.dientichdat,
        data.maxSoLuong,
      ],
      stringProperties: [data.tenGiongLua],
    };

    const resultLoHangLua = await this._LoHangLua.addContract(
      loHangLua_Data,
      sender
    );
    if (resultLoHangLua) {
      const resultGiaoDichLua =
        await this._GiaoDichMuaBanLuaContract.addContract(
          giaoDichMuaBanLua_Data,
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
    const giaoDichMuaBanLua =
      await this._GiaoDichMuaBanLuaContract.getContractById(id_GiaoDich);
    if (giaoDichMuaBanLua) {
      const loHangLua = await this._LoHangLua.getContractById(
        giaoDichMuaBanLua.id_LoHangLua
      );
      const chiTietGiaoDich = await this._GiaoDichMuaBanLuaRepository.findById(
        giaoDichMuaBanLua.id_GiaoDich
      );
      if (loHangLua) {
        let giaoDich: any = {
          id_GiaoDich: giaoDichMuaBanLua.id_GiaoDich,
          id_LoHangLua: giaoDichMuaBanLua.id_LoHangLua,
          id_XaVien: giaoDichMuaBanLua.id_XaVien,
          id_ThuongLai: giaoDichMuaBanLua.id_ThuongLai,
          thoigianGiaoDich: giaoDichMuaBanLua.ThoiGianGiaoDich,
          giaLoHang: giaoDichMuaBanLua.GiaLoHang,
          id_GiongLua: loHangLua.id_GiongLua,
          id_LichMuaVu: loHangLua.id_LichMuaVu,
          tenGiongLua: loHangLua.TenGiongLua,
          thoigianLoHang: loHangLua.ThoiGian,
          soluong: loHangLua.SoLuong,
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
}
