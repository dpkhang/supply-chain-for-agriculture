import { BaseService } from "./base/base.service"; 
import { HoatDongNhatKyContract } from "../contracts/HoatDongNhatKy.contract";
import { HoatDongNhatKyDTO } from "../dtos/request/HoatDongNhatKy.dto";
const ADDRESS_NHATKYRUONGDONG = process.env.ADDRESS_NHATKYRUONGDONG || "";

export class HoatdongnhatkyService extends BaseService {
    _HoatDongNhatKyContract

    constructor() {
        const hoatdongnhatkyService = new HoatDongNhatKyContract()
        super(hoatdongnhatkyService)
        this._HoatDongNhatKyContract = hoatdongnhatkyService
    }

    createContract = async (data: HoatDongNhatKyDTO, sender: string) => {
        try {
            const hoatDongNhatKy = data as any
            delete hoatDongNhatKy.wallet_XaVien

            hoatDongNhatKy.address_NhatKyDongRuong = ADDRESS_NHATKYRUONGDONG
        
            await this._HoatDongNhatKyContract.addContract(hoatDongNhatKy, sender);

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
}