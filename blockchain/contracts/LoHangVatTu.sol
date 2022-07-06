// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;

contract LoHangVatTu {
    //--------data-------//
    struct LoHangVatTu_Struct {
        uint    id_LoHangVatTu;
        uint    id_Muavu;
        uint    id_VatTu;
        uint    SoLuong;
        string  ThongTinKhac;
    }
    /*
        ThongTinKhac {
            ThongTinKhac,
            TenGiongLua
        }
    */

    mapping( uint => LoHangVatTu_Struct )
    public DanhSachLoHangVatTu;

    uint public maxLength = 0;

    //-------event-------//
    event SuKienThemLoHangVatTu (
        uint    id_LoHangVatTu,
        uint    id_Muavu,
        uint    id_VatTu,
        uint    SoLuong,
        string  ThongTinKhac
    );

    //------modifier-----//
    modifier KiemTraIdLoHangVatTu (  uint id_LoHangVatTu ) {
        uint index = 0;
        bool checkIdLoHangVatTu = true;

        for ( index; index < maxLength; index ++ ) {
            if ( DanhSachLoHangVatTu[ index ].id_LoHangVatTu == id_LoHangVatTu ) {
                checkIdLoHangVatTu = false;
            }
        }

        require(
            checkIdLoHangVatTu,
            "Id lo hang vat tu la duy nhat"
        );
        _;
    }

    modifier KiemTraSoLuong ( uint SoLuong ) {
        require(
            SoLuong > 0,
            "So luong phai lon hon 0"
        );

        _;
    }

    //-------handle------//
    function ThemLohangVatTu (
        uint            id_LoHangVatTu,
        uint            id_Muavu,
        uint            id_VatTu,
        uint            SoLuong,
        string memory   ThongTinKhac
    ) 
    public
    KiemTraIdLoHangVatTu(id_LoHangVatTu)
    KiemTraSoLuong( SoLuong )
    returns ( bool )
    {
        LoHangVatTu_Struct memory LoHangVatTuMemory;
        LoHangVatTuMemory = LoHangVatTu_Struct (
            id_LoHangVatTu,
            id_Muavu,
            id_VatTu,
            SoLuong,
            ThongTinKhac
        );

        DanhSachLoHangVatTu[ maxLength ] = LoHangVatTuMemory;
        maxLength = maxLength + 1;

        emit SuKienThemLoHangVatTu (
            id_LoHangVatTu,
            id_Muavu,
            id_VatTu,
            SoLuong,
            ThongTinKhac
        );

        return true;
    }
}