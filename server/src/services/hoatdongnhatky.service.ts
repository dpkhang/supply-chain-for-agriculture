import { BaseService } from "./base/base.service"; 
import { HoatDongNhatKyContract } from "../contracts/HoatDongNhatKy.contract";
import { HoatDongNhatKyDTO } from "../dtos/request/HoatDongNhatKy.dto";
import { NhatkydongruongRepository } from "../repositories/nhatkydongruong.repository";

export class HoatdongnhatkyService extends BaseService {
    private _HoatDongNhatKyContract
    private _HoatDongNhatKyRepository

    constructor() {
        const hoatdongnhatkyService = new HoatDongNhatKyContract()
        const hoatDongNhatKyRepository = new NhatkydongruongRepository()
        super(hoatDongNhatKyRepository)
        this._HoatDongNhatKyContract = hoatdongnhatkyService
        this._HoatDongNhatKyRepository = hoatDongNhatKyRepository
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
            const danhSachHoatDongNhatKy = await this._HoatDongNhatKyContract.getContracts('SuKienThemHoatDongNhatKy') as any
            let listResult = []

            const totalPage = (limit != 0) ? Math.ceil(danhSachHoatDongNhatKy.length / limit) : 1

            const startIndex = (page - 1) * limit
            const endIndex = ( startIndex + limit > danhSachHoatDongNhatKy.length ) ? danhSachHoatDongNhatKy.length : startIndex + limit
            const danhSachHoatDongNhatKyLimit = (startIndex == endIndex) ? danhSachHoatDongNhatKy : danhSachHoatDongNhatKy.slice(startIndex, endIndex)

            for (let hoatDongNhatKy of danhSachHoatDongNhatKyLimit) {
                const id_nhatKyDongRuong = hoatDongNhatKy.returnValues.id_NhatKyDongRuong
                const hoatDongNhatKyChiTiet = await this._HoatDongNhatKyRepository.findById(id_nhatKyDongRuong)
                let result = {
                    id_nhatkydongruong      : hoatDongNhatKy.returnValues.id_NhatKyDongRuong,
                    id_lichmuavu            : hoatDongNhatKy.returnValues.id_LichMuaVu,
                    id_thuadat              : hoatDongNhatKy.returnValues.id_ThuaDat,
                    id_xavien               : hoatDongNhatKy.returnValues.id_XaVien,
                    id_hoatdongmuavu        : hoatDongNhatKy.returnValues.id_HoatDongMuaVu,
                    ThoiGian                : hoatDongNhatKy.returnValues.ThoiGian,
                    description             : hoatDongNhatKyChiTiet.description,
                    status                  : hoatDongNhatKyChiTiet.status,
                    created_at              : hoatDongNhatKyChiTiet.created_at,
                    updated_at              : hoatDongNhatKyChiTiet.updated_at
                }
                listResult.push(result)
            }

            return {
                totalPage: totalPage,
                totalItem: danhSachHoatDongNhatKyLimit.length,
                page: page,
                danhSachHoatDongNhatKy: listResult
            };
        } catch (err) {
            throw err
        }
    }

    getContractById = async (id_HoatDongNhatKy: number) => {
        try {
            const hoatDongNhatKy = await this._HoatDongNhatKyContract.getContractById(id_HoatDongNhatKy)

            if (
                hoatDongNhatKy.id_NhatKyDongRuong == 0 ||
                hoatDongNhatKy.id_HoatDongNhatKy  == 0 ||
                hoatDongNhatKy.ThoiGian           == 0
            ) return null

            if (hoatDongNhatKy) {
                console.log(hoatDongNhatKy)

                const id_nhatKyDongRuong = hoatDongNhatKy.id_NhatKyDongRuong
                const hoatDongNhatKyChiTiet = await this._HoatDongNhatKyRepository.findById(id_nhatKyDongRuong)

                const hoatDongNhatKyResult = {
                    id_nhatkydongruong      : hoatDongNhatKy.id_NhatKyDongRuong,
                    id_lichmuavu            : hoatDongNhatKy.id_LichMuaVu,
                    id_thuadat              : hoatDongNhatKy.id_ThuaDat,
                    id_xavien               : hoatDongNhatKy.id_XaVien,
                    id_hoatdongmuavu        : hoatDongNhatKy.id_HoatDongMuaVu,
                    ThoiGian                : hoatDongNhatKy.ThoiGian,
                    description             : hoatDongNhatKyChiTiet.description,
                    status                  : hoatDongNhatKyChiTiet.status,
                    created_at              : hoatDongNhatKyChiTiet.created_at,
                    updated_at              : hoatDongNhatKyChiTiet.updated_at
                }

                return hoatDongNhatKyResult
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