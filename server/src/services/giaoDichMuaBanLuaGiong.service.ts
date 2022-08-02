import { BaseService } from "./base/base.service"; 
import { GiaoDichMuaBanLuaGiongContract, GiaoDichMuaBanLuaGiongInterface } from "../contracts/GiaoDichMuaBanLuaGiong.contract";
import { GiaoDichMuaBanLuaGiongDTO } from "../dtos/request/GiaoDichMuaBanLuaGiong.dto";
import { LoHangLuaContract } from "../contracts/LoHangLua.contract";
import { NhatKyDongRuongContract } from "../contracts/NhatKyDongRuong.contract";

export class GiaoDichMuaBanLuaGiongService extends BaseService {
    private _GiaoDichMuaBanLuaGiongContract
    private _LoHangLuaContract
    private _NhatKyDongRuongContract

    constructor() {
        const giaoDichMuaBanLuaGiongService = new GiaoDichMuaBanLuaGiongContract()
        super(giaoDichMuaBanLuaGiongService)
        this._GiaoDichMuaBanLuaGiongContract = giaoDichMuaBanLuaGiongService

        this._LoHangLuaContract = new LoHangLuaContract()

        this._NhatKyDongRuongContract = new NhatKyDongRuongContract()
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

            const giaoDichMuaBanLuaGiongProperties: GiaoDichMuaBanLuaGiongInterface = {
                intProperties,
                stringProperties
            }

            await this._GiaoDichMuaBanLuaGiongContract.addContract(giaoDichMuaBanLuaGiongProperties, data.wallet_XaVien);

        } catch ( err ) {
            throw err
        }
    }

    getContractById = async (id_GiaoDich: number) => {
        const GiaoDichMuaBanLuaGiong = await this._GiaoDichMuaBanLuaGiongContract.getContractById(id_GiaoDich)

        if (
            GiaoDichMuaBanLuaGiong.id_GiaoDichLuaGiong  == 0 ||
            GiaoDichMuaBanLuaGiong.id_XaVien            == 0 ||
            GiaoDichMuaBanLuaGiong.id_NhaCungCapVatTu   == 0 ||
            GiaoDichMuaBanLuaGiong.id_LichMuaVu         == 0 ||
            GiaoDichMuaBanLuaGiong.id_LuaGiong          == 0 ||
            GiaoDichMuaBanLuaGiong.SoLuong              == 0 ||
            GiaoDichMuaBanLuaGiong.TenLuaGiong          == 0 ||
            GiaoDichMuaBanLuaGiong.ThoiGian             == 0
        ) return null;

        if (GiaoDichMuaBanLuaGiong) {
            const GiaoDichMuaBanLuaGiongResult = {
                id_GiaoDichLuaGiong     : GiaoDichMuaBanLuaGiong.id_GiaoDichLuaGiong,
                id_XaVien               : GiaoDichMuaBanLuaGiong.id_XaVien,           
                id_NhaCungCapVatTu      : GiaoDichMuaBanLuaGiong.id_NhaCungCapVatTu,  
                id_LichMuaVu            : GiaoDichMuaBanLuaGiong.id_LichMuaVu,        
                id_LuaGiong             : GiaoDichMuaBanLuaGiong.id_LuaGiong,         
                SoLuong                 : GiaoDichMuaBanLuaGiong.SoLuong,             
                TenLuaGiong             : GiaoDichMuaBanLuaGiong.TenLuaGiong,         
                ThoiGian                : GiaoDichMuaBanLuaGiong.ThoiGian
            }
            return GiaoDichMuaBanLuaGiongResult
        }
        
        return null
    }

    getContractByIdLoHangLua = async (id_LoHangLua: number) => {
        const LoHangLua = await this._LoHangLuaContract.getContractById(id_LoHangLua);
        const id_NhatKyDongRuong = LoHangLua?.id_NhatKyDongRuong

        if (id_NhatKyDongRuong == 0) return null

        const NhatKyDongRuong = await this._NhatKyDongRuongContract.getContractById(id_NhatKyDongRuong)
        const id_GiaoDich = NhatKyDongRuong.id_GiaoDich

        if (id_GiaoDich == 0) return null

        const GiaoDichMuaBanLuaGiong = await this._GiaoDichMuaBanLuaGiongContract.getContractById(id_GiaoDich)

        if (
            GiaoDichMuaBanLuaGiong.id_GiaoDichLuaGiong  == 0 ||
            GiaoDichMuaBanLuaGiong.id_XaVien            == 0 ||
            GiaoDichMuaBanLuaGiong.id_NhaCungCapVatTu   == 0 ||
            GiaoDichMuaBanLuaGiong.id_LichMuaVu         == 0 ||
            GiaoDichMuaBanLuaGiong.id_LuaGiong          == 0 ||
            GiaoDichMuaBanLuaGiong.SoLuong              == 0 ||
            GiaoDichMuaBanLuaGiong.TenLuaGiong          == 0 ||
            GiaoDichMuaBanLuaGiong.ThoiGian             == 0
        ) return null;

        if (GiaoDichMuaBanLuaGiong) {
            const GiaoDichMuaBanLuaGiongResult = {
                id_GiaoDichLuaGiong     : GiaoDichMuaBanLuaGiong.id_GiaoDichLuaGiong,
                id_XaVien               : GiaoDichMuaBanLuaGiong.id_XaVien,           
                id_NhaCungCapVatTu      : GiaoDichMuaBanLuaGiong.id_NhaCungCapVatTu,  
                id_LichMuaVu            : GiaoDichMuaBanLuaGiong.id_LichMuaVu,        
                id_LuaGiong             : GiaoDichMuaBanLuaGiong.id_LuaGiong,         
                SoLuong                 : GiaoDichMuaBanLuaGiong.SoLuong,             
                TenLuaGiong             : GiaoDichMuaBanLuaGiong.TenLuaGiong,         
                ThoiGian                : GiaoDichMuaBanLuaGiong.ThoiGian
            }
            return GiaoDichMuaBanLuaGiongResult
        }
        
        return null
    }

}