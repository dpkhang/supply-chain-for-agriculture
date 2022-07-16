import { BaseService }          from "./base/base.service"; 
import { VatTuSuDungContract, VatTuSuDungProperties }  from "../contracts/VatTuSuDung.contract"; 
import { VatTuSuDungDTO }       from "../dtos/request/VatTuSuDung.dto";

const ADDRESS_HOATDONGNHATKY    = process.env.ADDRESS_HOATDONGNHATKY || "";
const ADDRESS_LOHANGVATTU       = process.env.ADDRESS_LOHANGVATTU || "";

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
}