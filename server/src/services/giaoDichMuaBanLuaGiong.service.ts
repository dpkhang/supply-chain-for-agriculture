import { BaseService } from "./base/base.service";
import {
  GiaoDichMuaBanLuaGiongContract,
  GiaoDichMuaBanLuaGiongInterface,
} from "../contracts/GiaoDichMuaBanLuaGiong.contract";
import { GiaoDichMuaBanLuaGiongDTO } from "../dtos/request/GiaoDichMuaBanLuaGiong.dto";
import { Sender } from "../dtos/request/Sender.dto";
import { Giaodich_luagiongRepository } from "../repositories/giaodich_luagiong.repository";
import { LoHangVatTu_Service } from "./LoHangVatTu.service";

export class GiaoDichMuaBanLuaGiongService extends BaseService {
  private _GiaoDichMuaBanLuaGiongContract;
  private _GiaoDichLuaGiongRepository;
  private _loHangLuaGongService;

  constructor() {
    const giaoDichLuaGiongRepository = new Giaodich_luagiongRepository();
    super(giaoDichLuaGiongRepository);
    this._GiaoDichLuaGiongRepository = giaoDichLuaGiongRepository;

    const giaoDichMuaBanLuaGiongService = new GiaoDichMuaBanLuaGiongContract();
    this._GiaoDichMuaBanLuaGiongContract = giaoDichMuaBanLuaGiongService;

    const loHangLuaGiong = new LoHangVatTu_Service();
    this._loHangLuaGongService = loHangLuaGiong;
  }

  createContract = async (data: GiaoDichMuaBanLuaGiongDTO) => {
    try {
      const intProperties = [];
      intProperties.push(data.id_GiaoDichLuaGiong);
      intProperties.push(data.id_XaVien);
      intProperties.push(data.id_NhaCungCapVatTu);
      intProperties.push(data.id_LichMuaVu);
      intProperties.push(data.id_LuaGiong);
      intProperties.push(data.SoLuong);
      intProperties.push(data.ThoiGian);

      const stringProperties = [];
      stringProperties.push(data.TenLuaGiong);

      const giaoDichMuaBanLuaGiongProperties: GiaoDichMuaBanLuaGiongInterface =
        {
          intProperties,
          stringProperties,
        };

      const sender: Sender = {
        wallet: data.wallet_XaVien,
        password: data.password_Wallet,
      };

      await this._GiaoDichMuaBanLuaGiongContract.addContract(
        giaoDichMuaBanLuaGiongProperties,
        sender
      );
    } catch (err) {
      throw err;
    }
  };

  getContractById = async (id_GiaoDich: number) => {
    const GiaoDichMuaBanLuaGiong =
      await this._GiaoDichMuaBanLuaGiongContract.getContractById(id_GiaoDich);

    if (
      GiaoDichMuaBanLuaGiong.id_GiaoDichLuaGiong == 0 ||
      GiaoDichMuaBanLuaGiong.id_XaVien == 0 ||
      GiaoDichMuaBanLuaGiong.id_NhaCungCapVatTu == 0 ||
      GiaoDichMuaBanLuaGiong.id_LichMuaVu == 0 ||
      GiaoDichMuaBanLuaGiong.id_LuaGiong == 0 ||
      GiaoDichMuaBanLuaGiong.SoLuong == 0 ||
      GiaoDichMuaBanLuaGiong.TenLuaGiong == 0 ||
      GiaoDichMuaBanLuaGiong.ThoiGian == 0
    )
      return null;

    if (GiaoDichMuaBanLuaGiong) {
      const gdLuaGiongDatabase =
        await this._GiaoDichLuaGiongRepository.findById(
          GiaoDichMuaBanLuaGiong.id_GiaoDichLuaGiong
        );
        
      if (!gdLuaGiongDatabase) {
        return null;
      }

      const GiaoDichMuaBanLuaGiongResult = {
        id_GiaoDichLuaGiong: GiaoDichMuaBanLuaGiong.id_GiaoDichLuaGiong,
        id_XaVien: GiaoDichMuaBanLuaGiong.id_XaVien,
        id_NhaCungCapVatTu: GiaoDichMuaBanLuaGiong.id_NhaCungCapVatTu,
        id_LichMuaVu: GiaoDichMuaBanLuaGiong.id_LichMuaVu,
        id_LuaGiong: GiaoDichMuaBanLuaGiong.id_LuaGiong,
        SoLuong: GiaoDichMuaBanLuaGiong.SoLuong,
        status: gdLuaGiongDatabase.status,
        hoptacxa_xacnhan: gdLuaGiongDatabase.hoptacxa_xacnhan,
        nhacungcap_xacnhan: gdLuaGiongDatabase.nhacungcap_xacnhan,
        xavien_xacnhan: gdLuaGiongDatabase.xavien_xacnhan,
        description_giaodich: gdLuaGiongDatabase.description_giaodich,
        TenLuaGiong: GiaoDichMuaBanLuaGiong.TenLuaGiong,
        ThoiGian: GiaoDichMuaBanLuaGiong.ThoiGian,
      };

      return GiaoDichMuaBanLuaGiongResult;
    }

    return null;
  };

  getContractByLog = async (id_lichMuaVu: number, id_xaVien: number) => {
    const danhSachGiaoDich =
      await this._GiaoDichMuaBanLuaGiongContract.getContracts(
        "SuKienGiaoDichMuaBanLuaGiong"
      );

    if (danhSachGiaoDich) {
      for (let i = 0; i < danhSachGiaoDich.length; i++) {
        if (
          danhSachGiaoDich[i].returnValues.id_LichMuaVu == id_lichMuaVu &&
          danhSachGiaoDich[i].returnValues.id_XaVien == id_xaVien
        ) {
          const gdLuaGiongDatabase =
            await this._GiaoDichLuaGiongRepository.findById(
              danhSachGiaoDich[i].returnValues.id_GiaoDichLuaGiong
            );
          const GiaoDichMuaBanLuaGiong = danhSachGiaoDich[i].returnValues;

          if (!gdLuaGiongDatabase) {
            return null;
          }

          const GiaoDichMuaBanLuaGiongResult = {
            id_giaodichluagiong: GiaoDichMuaBanLuaGiong.id_GiaoDichLuaGiong,
            id_xavien: GiaoDichMuaBanLuaGiong.id_XaVien,
            id_nhacungcapvattu: GiaoDichMuaBanLuaGiong.id_NhaCungCapVatTu,
            id_lichmuavu: GiaoDichMuaBanLuaGiong.id_LichMuaVu,
            id_luagiong: GiaoDichMuaBanLuaGiong.id_LuaGiong,
            tengionglua: GiaoDichMuaBanLuaGiong.TenGiongLua,
            soluong: GiaoDichMuaBanLuaGiong.SoLuong,
            status: gdLuaGiongDatabase.status,
            hoptacxa_xacnhan: gdLuaGiongDatabase.hoptacxa_xacnhan,
            nhacungcap_xacnhan: gdLuaGiongDatabase.nhacungcap_xacnhan,
            xavien_xacnhan: gdLuaGiongDatabase.xavien_xacnhan,
            description_giaodich: gdLuaGiongDatabase.description_giaodich,
            tenluagiong: GiaoDichMuaBanLuaGiong.TenLuaGiong,
            thoigian: GiaoDichMuaBanLuaGiong.ThoiGian,
          };

          return GiaoDichMuaBanLuaGiongResult;
        }
      }
    }
    return null;
  };
}
