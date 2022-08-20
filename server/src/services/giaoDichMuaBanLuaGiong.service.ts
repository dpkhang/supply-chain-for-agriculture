import { BaseService } from "./base/base.service"; 
import { GiaoDichMuaBanLuaGiongContract, GiaoDichMuaBanLuaGiongInterface } from "../contracts/GiaoDichMuaBanLuaGiong.contract";
import { GiaoDichMuaBanLuaGiongDTO } from "../dtos/request/GiaoDichMuaBanLuaGiong.dto";
import { Sender } from "../dtos/request/Sender.dto";
import { Giaodich_luagiongRepository } from "../repositories/giaodich_luagiong.repository";

export class GiaoDichMuaBanLuaGiongService extends BaseService {
    private _GiaoDichMuaBanLuaGiongContract
    private _GiaoDichLuaGiongRepository
    

    constructor() {
        const giaoDichLuaGiongRepository = new Giaodich_luagiongRepository()
        super(giaoDichLuaGiongRepository)
        this._GiaoDichLuaGiongRepository = giaoDichLuaGiongRepository

        const giaoDichMuaBanLuaGiongService = new GiaoDichMuaBanLuaGiongContract()
        this._GiaoDichMuaBanLuaGiongContract = giaoDichMuaBanLuaGiongService
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

            const sender: Sender = {
                wallet: data.wallet_XaVien,
                password: data.password_Wallet
            }

            await this._GiaoDichMuaBanLuaGiongContract.addContract(giaoDichMuaBanLuaGiongProperties, sender);

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
            const gdLuaGiongDatabase = await this._GiaoDichLuaGiongRepository.findById(GiaoDichMuaBanLuaGiong.id_GiaoDichLuaGiong)

            const GiaoDichMuaBanLuaGiongResult = {
                id_GiaoDichLuaGiong     : GiaoDichMuaBanLuaGiong.id_GiaoDichLuaGiong,
                id_XaVien               : GiaoDichMuaBanLuaGiong.id_XaVien,           
                id_NhaCungCapVatTu      : GiaoDichMuaBanLuaGiong.id_NhaCungCapVatTu,  
                id_LichMuaVu            : GiaoDichMuaBanLuaGiong.id_LichMuaVu,        
                id_LuaGiong             : GiaoDichMuaBanLuaGiong.id_LuaGiong,         
                SoLuong                 : GiaoDichMuaBanLuaGiong.SoLuong,    
                status                  : gdLuaGiongDatabase.status,
                hoptacxa_xacnhan        : gdLuaGiongDatabase.hoptacxa_xacnhan,
                nhacungcap_xacnhan      : gdLuaGiongDatabase.nhacungcap_xacnhan,
                xavien_xacnhan          : gdLuaGiongDatabase.xavien_xacnhan,
                description_giaodich    : gdLuaGiongDatabase.description_giaodich,
                TenLuaGiong             : GiaoDichMuaBanLuaGiong.TenLuaGiong,         
                ThoiGian                : GiaoDichMuaBanLuaGiong.ThoiGian
            }

            return GiaoDichMuaBanLuaGiongResult
        }
        
        return null
    }

}