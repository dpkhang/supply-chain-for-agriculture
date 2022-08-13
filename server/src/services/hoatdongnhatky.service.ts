import { BaseService } from "./base/base.service"; 
import { HoatDongNhatKyContract } from "../contracts/HoatDongNhatKy.contract";
import { HoatDongNhatKyDTO } from "../dtos/request/HoatDongNhatKy.dto";

export class HoatdongnhatkyService extends BaseService {
    private _HoatDongNhatKyContract

    constructor() {
        const hoatdongnhatkyService = new HoatDongNhatKyContract()
        super(hoatdongnhatkyService)
        this._HoatDongNhatKyContract = hoatdongnhatkyService
    }

    createContract = async (data: HoatDongNhatKyDTO, sender: string) => {
        try {
            const hoatDongNhatKyProperties = [
                data.id_NhatKyDongRuong,
                data.id_LichMuaVu,
                data.id_ThuaDat,
                data.id_XaVien,
                data.id_HoatDongMuaVu,
                data.ThoiGian
            ];
        
            await this._HoatDongNhatKyContract.addContract({intProperties: hoatDongNhatKyProperties}, sender);

        } catch ( err ) {
            throw err
        }
    }

    getContracts = async (limit: number = 0, page:number = 1) => {
        try {

            if ( page == 0 ) return null

            const danhSachHoatDongNhatKy = await this._HoatDongNhatKyContract.getContracts("SuKienThemHoatDongNhatKy")
    
            if ( danhSachHoatDongNhatKy && danhSachHoatDongNhatKy.length > 0 ) {

                const danhSachHoatDongNhatKyFilter = []
                const totalPage = (limit != 0) ? Math.ceil(danhSachHoatDongNhatKy.length / limit) : 1

                const startIndex = (page - 1) * limit
                const endIndex = ( startIndex + limit > danhSachHoatDongNhatKy.length ) ? danhSachHoatDongNhatKy.length : startIndex + limit
                const danhSachHoatDongNhatKyChoosed = (startIndex == endIndex) ? danhSachHoatDongNhatKy : danhSachHoatDongNhatKy.slice(startIndex, endIndex)

                for ( let nhatKyDongRuong of danhSachHoatDongNhatKyChoosed ) {
                    const returnValues = nhatKyDongRuong.returnValues
                    const nhatKyDongRuongTemp = {
                        id_NhatKyDongRuong      : returnValues.id_NhatKyDongRuong,
                        id_HoatDongNhatKy       : returnValues.id_HoatDongNhatKy,
                        ThoiGian                : returnValues.ThoiGian,
                    }
                    danhSachHoatDongNhatKyFilter.push(nhatKyDongRuongTemp)
                }

                const result = {
                    totalPage: totalPage,
                    totalItem: danhSachHoatDongNhatKyFilter.length,
                    page: page,
                    danhSachHoatDongNhatKy: danhSachHoatDongNhatKyFilter
                }
    
                return result
            }
    
            return null

        } catch (err) {
            throw err
        }
    }

    getContractById = async (id_HoatDongNhatKy: number) => {
        try {
            const vatTuSuDung = await this._HoatDongNhatKyContract.getContractById(id_HoatDongNhatKy)

            if (
                vatTuSuDung.id_NhatKyDongRuong == 0 ||
                vatTuSuDung.id_HoatDongNhatKy  == 0 ||
                vatTuSuDung.ThoiGian           == 0
            ) return null

            if (vatTuSuDung) {

                const vatTuSuDungResult = {
                    id_NhatKyDongRuong      : vatTuSuDung.id_NhatKyDongRuong,
                    id_HoatDongNhatKy       : vatTuSuDung.id_HoatDongNhatKy,
                    ThoiGian                : vatTuSuDung.ThoiGian,
                }

                return vatTuSuDungResult
            }

            return null

        } catch (err) {
            throw err
        }
    }

    getContractsByIdNhatKy = async (id_NhatKyDongRuong: number, limit: number = 0, page: number = 1) => {
        try {

            if ( page == 0 ) return null

            const danhSachHoatDongNhatKy = await this._HoatDongNhatKyContract.getContracts("SuKienThemHoatDongNhatKy")
            const danhSachHoatDongNhatKyFilterByIdNhatKy = danhSachHoatDongNhatKy
            ?.filter( element => element.returnValues.id_NhatKyDongRuong == id_NhatKyDongRuong )
    
            if ( danhSachHoatDongNhatKyFilterByIdNhatKy && danhSachHoatDongNhatKyFilterByIdNhatKy.length > 0 ) {

                const danhSachHoatDongNhatKyFilterByIdNhatKyFilter = []
                const totalPage = (limit != 0) ? Math.ceil(danhSachHoatDongNhatKyFilterByIdNhatKy.length / limit) : 1

                const startIndex = (page - 1) * limit
                const endIndex = ( startIndex + limit > danhSachHoatDongNhatKyFilterByIdNhatKy.length ) ? danhSachHoatDongNhatKyFilterByIdNhatKy.length : startIndex + limit
                const danhSachHoatDongNhatKyFilterByIdNhatKyChoosed = (startIndex == endIndex) ? danhSachHoatDongNhatKyFilterByIdNhatKy : danhSachHoatDongNhatKyFilterByIdNhatKy.slice(startIndex, endIndex)

                for ( let nhatKyDongRuong of danhSachHoatDongNhatKyFilterByIdNhatKyChoosed ) {
                    const returnValues = nhatKyDongRuong.returnValues
                    const nhatKyDongRuongTemp = {
                        id_NhatKyDongRuong      : returnValues.id_NhatKyDongRuong,
                        id_HoatDongNhatKy       : returnValues.id_HoatDongNhatKy,
                        ThoiGian                : returnValues.ThoiGian,
                    }
                    danhSachHoatDongNhatKyFilterByIdNhatKyFilter.push(nhatKyDongRuongTemp)
                }

                const result = {
                    totalPage: totalPage,
                    totalItem: danhSachHoatDongNhatKyFilterByIdNhatKyFilter.length,
                    page: page,
                    danhSachHoatDongNhatKyFilterByIdNhatKy: danhSachHoatDongNhatKyFilterByIdNhatKyFilter
                }
    
                return result
            }
    
            return null

        } catch (err) {
            throw err
        }
    }
}