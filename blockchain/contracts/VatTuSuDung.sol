// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;

contract VatTuSuDung {
    //--------data-------//
    struct VatTuSuDung_Struct {
        uint    id_HoatDongNhatKy;
        uint    id_VatTu;
        uint    id_LoHangVatTu;
        uint    SoLuong;
        string  ThongTinKhac;
    }
     /* 
        ThongTinKhac {
            ThoiGian
            TenVatTu
        }
    */

    mapping( uint => VatTuSuDung_Struct )
    public DanhSachVatTuSuDung;

    uint maxLength = 0;

    //-------event-------//
    event SuKienThemVatTuNongNghiep (
        uint    id_HoatDongNhatKy,
        uint    id_VatTu,
        uint    id_LoHangVatTu,
        uint    SoLuong,
        string  ThongTinKhac
    );

    //------modifier-----//
    modifier KiemTraSoLuong ( uint SoLuong ) {
        require( 
            SoLuong > 0,
            "So luong phai lon hon 0"
        );

        _;
    }

    modifier KiemTraVatTuSuDung( 
        uint id_HoatDongNhatKy, 
        uint id_LoHangVatTu 
    ) {
        uint index                  = 0;
        bool checkIdHoatDongNhatKy = true;
        bool checkIdLoHangVatTu  = true;

        for ( index; index < maxLength; index ++ ) {
            if ( DanhSachVatTuSuDung[ index ].id_HoatDongNhatKy 
                 == id_HoatDongNhatKy 
            ) {
                checkIdHoatDongNhatKy = false;
            }

            if ( DanhSachVatTuSuDung[ index ].id_LoHangVatTu 
                 == id_LoHangVatTu 
            ) {
                checkIdLoHangVatTu = false;
            }
        }

        require(
            checkIdHoatDongNhatKy || checkIdLoHangVatTu,
            string.concat(
                "ID hoat dong nhat ky phai la duy nhat ",
                "ID lo hang vat tu phai la duy nhat"
            )
        );

        require (
            checkIdHoatDongNhatKy,
            "ID hoat dong nhat ky phai la duy nhat"
        );

        require(
            checkIdLoHangVatTu,
            "ID lo hang vat tu phai la duy nhat"
        );
        
        _;
    }

    //-------handle------//
    function ThemVatTuNongNghiep (
        uint            id_HoatDongNhatKy,
        uint            id_VatTu,
        uint            id_LoHangVatTu,
        uint            SoLuong,
        string memory   ThongTinKhac
    )
    public
    KiemTraVatTuSuDung ( id_HoatDongNhatKy, id_LoHangVatTu  )
    KiemTraSoLuong( SoLuong )
    returns (bool)
    {
        VatTuSuDung_Struct memory VatTuSuDungMemory;
        VatTuSuDungMemory = VatTuSuDung_Struct(
            id_HoatDongNhatKy,
            id_VatTu,
            id_LoHangVatTu,
            SoLuong,
            ThongTinKhac
        );

        DanhSachVatTuSuDung[maxLength] = VatTuSuDungMemory;
        maxLength = maxLength + 1;

        emit SuKienThemVatTuNongNghiep(
            id_HoatDongNhatKy,
            id_VatTu,
            id_LoHangVatTu,
            SoLuong,
            ThongTinKhac
        );

        return true;
    }

}