import { BaseService } from "./base/base.service"; 
import { GiaoDichMuaBanGiongLuaContract, GiaoDichMuaBanGiongLuaInterface } from "../contracts/GiaoDichMuaBanGiongLua.contract";
import { GiaoDichMuaBanGiongLuaLuaDTO } from "../dtos/request/GiaoDichMuaBanGiongLua.dto";

export class GiaoDichMuaBanGiongLuaService extends BaseService {
    private _GiaoDichMuaBanGiongLuaContract

    constructor() {
        const giaoDichMuaBanGiongLuaService = new GiaoDichMuaBanGiongLuaContract()
        super(giaoDichMuaBanGiongLuaService)
        this._GiaoDichMuaBanGiongLuaContract = giaoDichMuaBanGiongLuaService
    }

    createContract = async (data: GiaoDichMuaBanGiongLuaLuaDTO) => {
        try {
            const intProperties = [];
            intProperties.push(data.id_GiaoDichLuaGiong);
            intProperties.push(data.id_XaVien);
            intProperties.push(data.id_NhaCungCapVatTu);
            intProperties.push(data.id_LichMuaVu);
            intProperties.push(data.id_GiongLua);
            intProperties.push(data.SoLuong);
            intProperties.push(data.ThoiGian);

            const stringProperties = [];
            stringProperties.push(data.TenGiongLua);

            const giaoDichMuaBanGiongLuaProperties: GiaoDichMuaBanGiongLuaInterface = {
                intProperties,
                stringProperties
            }

            await this._GiaoDichMuaBanGiongLuaContract.addContract(giaoDichMuaBanGiongLuaProperties, data.wallet_XaVien);

        } catch ( err ) {
            throw err
        }
    }
}