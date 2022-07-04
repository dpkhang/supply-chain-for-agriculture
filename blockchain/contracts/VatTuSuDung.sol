// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;

contract VatTuSuDung {
    //--------data-------//
    struct VatTuSuDung_Struct {
        uint id_HoatDongNhatKy;
        uint id_VatTu;
        uint SoLuong;
    }

    mapping( uint => VatTuSuDung_Struct )
    public DanhSachVatTuSuDung;

    uint maxLength = 0;

    //-------event-------//
    event SuKienThemVatTuNongNghiep (
        uint id_HoatDongNhatKy,
        uint id_VatTu,
        uint SoLuong
    );

    //------modifier-----//
    modifier KiemTraSoLuong ( uint SoLuong ) {
        require( 
            SoLuong > 0,
            "So luong phai lon hon 0"
        );

        _;
    }

    //-------handle------//
    function ThemVatTuNongNghiep (
        uint id_HoatDongNhatKy,
        uint id_VatTu,
        uint SoLuong
    )
    public
    KiemTraSoLuong( SoLuong )
    returns (bool)
    {
        VatTuSuDung_Struct memory VatTuSuDungMemory;
        VatTuSuDungMemory = VatTuSuDung_Struct(
            id_HoatDongNhatKy,
            id_VatTu,
            SoLuong
        );

        DanhSachVatTuSuDung[maxLength] = VatTuSuDungMemory;
        maxLength = maxLength + 1;

        emit SuKienThemVatTuNongNghiep(
            id_HoatDongNhatKy,
            id_VatTu,
            SoLuong
        );

        return true;
    }

}