import { BaseService }          from "./base/base.service"; 
import { VatTuSuDungContract, VatTuSuDungProperties }  from "../contracts/VatTuSuDung.contract"; 
import { VatTuSuDungDTO }       from "../dtos/request/VatTuSuDung.dto";

const ADDRESS_HoatDongNhatKy    = process.env.ADDRESS_HoatDongNhatKy || "";
const ADDRESS_LohangVatTu       = process.env.ADDRESS_LohangVatTu || "";

export class VatTuSuDungService extends BaseService {
    _VatTuSuDungContract

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
                intProperties.push( VatTuSuDung.id_VatTu )
                intProperties.push( VatTuSuDung.id_VatTu )
                intProperties.push( VatTuSuDung.id_LoHangVatTu )
                intProperties.push( VatTuSuDung.ThoiGianVatTu )

                let stringProperties = []
                stringProperties.push( VatTuSuDung.TenVatTu )

                let addressProperties = []
                addressProperties.push( ADDRESS_LohangVatTu )
                addressProperties.push( ADDRESS_HoatDongNhatKy )

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
}