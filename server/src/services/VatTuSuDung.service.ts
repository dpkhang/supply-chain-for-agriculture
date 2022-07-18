import { BaseService }          from "./base/base.service"; 
import { VatTuSuDungContract, VatTuSuDungProperties }  from "../contracts/VatTuSuDung.contract"; 
import { VatTuSuDungDTO }       from "../dtos/request/VatTuSuDung.dto";

const ADDRESS_HOATDONGNHATKY    = process.env.ADDRESS_HOATDONGNHATKY || "";
const ADDRESS_LOHANGVATTU       = process.env.ADDRESS_LOHANGVATTU || "";

export class VatTuSuDungService extends BaseService {
    private _VatTuSuDungContract

    constructor() {
        const vatTuSuDungContract = new VatTuSuDungContract()
        super(vatTuSuDungContract)
        this._VatTuSuDungContract = vatTuSuDungContract
    }

    createContract = async ( data: VatTuSuDungDTO[], sender: string ) => {
        try {

            for ( let VatTuSuDung of data ) {

                let intProperties = []
                intProperties.push( VatTuSuDung.id_VatTuSuDung )
                intProperties.push( VatTuSuDung.id_HoatDongNhatKy )
                intProperties.push( VatTuSuDung.id_VatTu )
                intProperties.push( VatTuSuDung.id_LoHangVatTu )
                intProperties.push( VatTuSuDung.ThoiGianVatTu )

                let stringProperties = []
                stringProperties.push( VatTuSuDung.TenVatTu )

                let addressProperties = []
                addressProperties.push( ADDRESS_LOHANGVATTU )
                addressProperties.push( ADDRESS_HOATDONGNHATKY )

                const vatTuSuDungProperties: VatTuSuDungProperties = {
                    intProperties       : intProperties,
                    stringProperties    : stringProperties,
                    addressProperties   : addressProperties
                }

                await this._VatTuSuDungContract.addContract( 
                    vatTuSuDungProperties,
                    sender
                )    
            }

        } catch ( err ) {
            throw err
        }
    }

    async getContracts(limit:number = 0, page:number = 1) {
        try {

            if ( page == 0 ) return null

            const danhSachVatTuSuDung = await this._VatTuSuDungContract.getContracts("SuKienThemVatTuNongNghiep")
    
            if ( danhSachVatTuSuDung && danhSachVatTuSuDung.length > 0 ) {

                const danhSachVatTuSuDungFilter = []
                const totalPage = (limit != 0) ? Math.ceil(danhSachVatTuSuDung.length / limit) : 1

                const startIndex = (page - 1) * limit
                const endIndex = ( startIndex + limit > danhSachVatTuSuDung.length ) ? danhSachVatTuSuDung.length : startIndex + limit
                const danhSachVatTuSuDungChoosed = (startIndex == endIndex) ? danhSachVatTuSuDung : danhSachVatTuSuDung.slice(startIndex, endIndex)

                for ( let nhatKyDongRuong of danhSachVatTuSuDungChoosed ) {
                    const returnValues = nhatKyDongRuong.returnValues
                    const nhatKyDongRuongTemp = {
                        id_VatTuSuDung      : returnValues.id_VatTuSuDung,
                        id_HoatDongNhatKy   : returnValues.id_HoatDongNhatKy,
                        id_VatTu            : returnValues.id_VatTu,
                        id_LoHangVatTu      : returnValues.id_LoHangVatTu,
                        ThoiGianVatTu       : returnValues.ThoiGianVatTu,
                        TenVatTu            : returnValues.TenVatTu
                    }
                    danhSachVatTuSuDungFilter.push(nhatKyDongRuongTemp)
                }

                const result = {
                    totalPage: totalPage,
                    totalItem: danhSachVatTuSuDungFilter.length,
                    page: page,
                    danhSachVatTuSuDung: danhSachVatTuSuDungFilter
                }
    
                return result
            }
    
            return null

        } catch (err) {
            throw err
        }
    }

   async getContractById(id_VatTuSuDung:number) {
        try {
            const vatTuSuDung = await this._VatTuSuDungContract.getContractById(id_VatTuSuDung)

            if (
                vatTuSuDung.id_VatTuSuDung     == 0 ||
                vatTuSuDung.id_HoatDongNhatKy  == 0 ||
                vatTuSuDung.id_VatTu           == 0 ||
                vatTuSuDung.id_LoHangVatTu     == 0 ||
                vatTuSuDung.ThoiGianVatTu      == 0 ||
                vatTuSuDung.TenVatTu           == 0
            ) return null

            if (vatTuSuDung) {
                const vatTuSuDungResult = {
                        id_VatTuSuDung      : vatTuSuDung.id_VatTuSuDung,
                        id_HoatDongNhatKy   : vatTuSuDung.id_HoatDongNhatKy,
                        id_VatTu            : vatTuSuDung.id_VatTu,
                        id_LoHangVatTu      : vatTuSuDung.id_LoHangVatTu,
                        ThoiGianVatTu       : vatTuSuDung.ThoiGianVatTu,
                        TenVatTu            : vatTuSuDung.TenVatTu
                }

                return vatTuSuDungResult
            }

            return null

        } catch (err) {
            throw err
        }
    }

    async getContractsByIdHoatDongNhatKy(id_HoatDongNhatKy:number, limit:number = 0, page:number = 1) {
        try {

            if ( page == 0 ) return null

            const danhSachVatTuSuDung = await this._VatTuSuDungContract.getContracts("SuKienThemVatTuNongNghiep")
            const danhSachVatTuSuDungFilterById_HoatDongNhatKy = danhSachVatTuSuDung
            ?.filter(element => element.returnValues.id_HoatDongNhatKy == id_HoatDongNhatKy)
    
            if ( danhSachVatTuSuDungFilterById_HoatDongNhatKy && danhSachVatTuSuDungFilterById_HoatDongNhatKy.length > 0 ) {

                const danhSachVatTuSuDungFilterById_HoatDongNhatKyFilter = []
                const totalPage = (limit != 0) ? Math.ceil(danhSachVatTuSuDungFilterById_HoatDongNhatKy.length / limit) : 1

                const startIndex = (page - 1) * limit
                const endIndex = ( startIndex + limit > danhSachVatTuSuDungFilterById_HoatDongNhatKy.length ) ? danhSachVatTuSuDungFilterById_HoatDongNhatKy.length : startIndex + limit
                const danhSachVatTuSuDungFilterById_HoatDongNhatKyChoosed = (startIndex == endIndex) ? danhSachVatTuSuDungFilterById_HoatDongNhatKy : danhSachVatTuSuDungFilterById_HoatDongNhatKy.slice(startIndex, endIndex)

                for ( let nhatKyDongRuong of danhSachVatTuSuDungFilterById_HoatDongNhatKyChoosed ) {
                    const returnValues = nhatKyDongRuong.returnValues
                    const nhatKyDongRuongTemp = {
                        id_VatTuSuDung      : returnValues.id_VatTuSuDung,
                        id_HoatDongNhatKy   : returnValues.id_HoatDongNhatKy,
                        id_VatTu            : returnValues.id_VatTu,
                        id_LoHangVatTu      : returnValues.id_LoHangVatTu,
                        ThoiGianVatTu       : returnValues.ThoiGianVatTu,
                        TenVatTu            : returnValues.TenVatTu
                    }
                    danhSachVatTuSuDungFilterById_HoatDongNhatKyFilter.push(nhatKyDongRuongTemp)
                }

                const result = {
                    totalPage: totalPage,
                    totalItem: danhSachVatTuSuDungFilterById_HoatDongNhatKyFilter.length,
                    page: page,
                    danhSachVatTuSuDungFilterById_HoatDongNhatKy: danhSachVatTuSuDungFilterById_HoatDongNhatKyFilter
                }
    
                return result
            }
    
            return null

        } catch (err) {
            throw err
        }
    }
}