import { BaseService } from "./base/base.service"; 
import { NhatKyDongRuongContract } from "../contracts/NhatKyDongRuong.contract";
import { NhatKyDongRuong } from "../contracts/NhatKyDongRuong.contract";

export class NhatkydongruongService extends BaseService {
    private _NhatKyDongRuongContract

    constructor() {
        const nhatkydongruongService = new NhatKyDongRuongContract()
        super(nhatkydongruongService)
        this._NhatKyDongRuongContract = nhatkydongruongService
    }

    async AddTransaction( data: NhatKyDongRuong, sender: string ) {
        try {
            await this._NhatKyDongRuongContract.addContract(data, sender);
        } catch (err) {
            throw err
        }
    }

    async getContracts(limit:number = 0, page: number = 1) {
        try {

            if ( page == 0 ) return null

            const danhSachNhatKyDongRuong = await this._NhatKyDongRuongContract.getContracts("SuKienThemNhatKyDongRuong")
    
            if ( danhSachNhatKyDongRuong && danhSachNhatKyDongRuong.length > 0 ) {

                const danhSachNhatKyDongRuongFilter = []
                const totalPage = (limit != 0) ? Math.ceil(danhSachNhatKyDongRuong.length / limit) : 1

                const startIndex = (page - 1) * limit
                const endIndex = ( startIndex + limit > danhSachNhatKyDongRuong.length ) ? danhSachNhatKyDongRuong.length : startIndex + limit
                const danhSachNhatKyDongRuongChoosed = (startIndex == endIndex) ? danhSachNhatKyDongRuong : danhSachNhatKyDongRuong.slice(startIndex, endIndex)

                for ( let nhatKyDongRuong of danhSachNhatKyDongRuongChoosed ) {
                    const returnValues = nhatKyDongRuong.returnValues
                    const nhatKyDongRuongTemp = {
                        id_XaVien           : returnValues.id_XaVien,
                        id_NhatKyDongRuong  : returnValues.id_NhatKyDongRuong,
                        id_LichMuaVu        : returnValues.id_LichMuaVu,
                        id_ThuaDat          : returnValues.id_ThuaDat,
                        ThoiGian            : returnValues.ThoiGian
                    }
                    danhSachNhatKyDongRuongFilter.push(nhatKyDongRuongTemp)
                }

                const result = {
                    totalPage: totalPage,
                    totalItem: danhSachNhatKyDongRuongFilter.length,
                    page: page,
                    danhSachNhatKyDongRuong: danhSachNhatKyDongRuongFilter
                }
    
                return result
            }
    
            return null

        } catch (err) {
            throw err
        }
    }

    async getContractById( id_NhatKyDongRuong:number ) {
        try {
            const nhatKyDongRuong = await this._NhatKyDongRuongContract.getContractById(id_NhatKyDongRuong)

            if (
                nhatKyDongRuong.id_XaVien           == 0 ||
                nhatKyDongRuong.id_NhatKyDongRuong  == 0 ||
                nhatKyDongRuong.id_LichMuaVu        == 0 ||
                nhatKyDongRuong.id_ThuaDat          == 0 ||
                nhatKyDongRuong.ThoiGian            == 0
            ) return null

            if (nhatKyDongRuong) {
                const nhatKyDongRuongResult = {
                    id_XaVien           : nhatKyDongRuong.id_XaVien,
                    id_NhatKyDongRuong  : nhatKyDongRuong.id_NhatKyDongRuong,
                    id_LichMuaVu        : nhatKyDongRuong.id_LichMuaVu,
                    id_ThuaDat          : nhatKyDongRuong.id_ThuaDat,
                    ThoiGian            : nhatKyDongRuong.ThoiGian
                }
    
                return nhatKyDongRuongResult
            }

            return null

        } catch (err) {
            throw err
        }
    }

    async getContractByIdXaVien( id_XaVien:number, limit:number = 0, page: number = 1 ) {
        try {

            if ( page == 0 ) return null

            const danhSachNhatKyDongRuong = await this._NhatKyDongRuongContract.getContracts("SuKienThemNhatKyDongRuong")

            const danhSachNhatKyDongRuongFilterByIdXaVien = danhSachNhatKyDongRuong
            ?.filter(element => element.returnValues.id_XaVien == id_XaVien)
    
            if ( danhSachNhatKyDongRuongFilterByIdXaVien && danhSachNhatKyDongRuongFilterByIdXaVien.length > 0 ) {
        
                const danhSachNhatKyDongRuongFilterByIdXaVienFilter = []
                const totalPage = (limit != 0) ? Math.ceil(danhSachNhatKyDongRuongFilterByIdXaVien.length / limit) : 1

                const startIndex = (page - 1) * limit
                const endIndex = ( startIndex + limit > danhSachNhatKyDongRuongFilterByIdXaVien.length ) ? danhSachNhatKyDongRuongFilterByIdXaVien.length : startIndex + limit
                const danhSachNhatKyDongRuongFilterByIdXaVienChoosed = (startIndex == endIndex) 
                                                                        ? danhSachNhatKyDongRuongFilterByIdXaVien 
                                                                        : danhSachNhatKyDongRuongFilterByIdXaVien.slice(startIndex, endIndex)

                for ( let nhatKyDongRuong of danhSachNhatKyDongRuongFilterByIdXaVienChoosed ) {
                    const returnValues = nhatKyDongRuong.returnValues
                    const nhatKyDongRuongTemp = {
                        id_XaVien           : returnValues.id_XaVien,
                        id_NhatKyDongRuong  : returnValues.id_NhatKyDongRuong,
                        id_LichMuaVu        : returnValues.id_LichMuaVu,
                        id_ThuaDat          : returnValues.id_ThuaDat,
                        ThoiGian            : returnValues.ThoiGian
                    }
                    danhSachNhatKyDongRuongFilterByIdXaVienFilter.push(nhatKyDongRuongTemp)
                }

                const result = {
                    totalPage: totalPage,
                    totalItem: danhSachNhatKyDongRuongFilterByIdXaVienFilter.length,
                    page: page,
                    danhSachNhatKyDongRuong: danhSachNhatKyDongRuongFilterByIdXaVienFilter
                }
                
                return result
            }
    
            return null

        } catch (err) {
            throw err
        }
    }
}