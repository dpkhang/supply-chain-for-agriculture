// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;

contract HoatDongNhatKy {
    //--------data-------//
    struct HoatDongNhatKy_Struct {
        uint id_NhatKyDongRuong;
        uint id_LichMuaVu;
        uint id_ThuaDat;
        uint id_XaVien;
        uint id_HoatDongMuaVu;
        uint ThoiGian;
    }

    mapping( uint => HoatDongNhatKy_Struct ) public DanhSachHoatDongNhatKy;

    //-------event-------//
    event SuKienThemHoatDongNhatKy(
        uint id_NhatKyDongRuong,
        uint id_LichMuaVu,
        uint id_ThuaDat,
        uint id_XaVien,
        uint id_HoatDongMuaVu,
        uint ThoiGian
    );

    //------modifier-----//
    modifier KiemTraIDNhatKyDongRuong(uint id_NhatKyDongRuong) {
        require(
            DanhSachHoatDongNhatKy[id_NhatKyDongRuong].id_NhatKyDongRuong == 0,
            "Id nhat ky dong ruong phai la duy nhat"
        );

        _;
    }

    //-------handle------//
    
    function ThemHoatDongNhatKy (
        uint[] memory intProperties
    )
    public
    KiemTraIDNhatKyDongRuong(intProperties[0])
    returns ( bool ) {
        uint id_NhatKyDongRuong = intProperties[0];
        uint id_LichMuaVu = intProperties[1];
        uint id_ThuaDat = intProperties[2];
        uint id_XaVien = intProperties[3];
        uint id_HoatDongMuaVu = intProperties[4];
        uint ThoiGian = intProperties[5];

        HoatDongNhatKy_Struct memory HoatDongNhatKyMemory;
        HoatDongNhatKyMemory = HoatDongNhatKy_Struct(
            id_NhatKyDongRuong,
            id_LichMuaVu,
            id_ThuaDat,
            id_XaVien,
            id_HoatDongMuaVu,
            ThoiGian
        );

        DanhSachHoatDongNhatKy[ id_NhatKyDongRuong ] = HoatDongNhatKyMemory;

        emit SuKienThemHoatDongNhatKy(
            id_NhatKyDongRuong,
            id_LichMuaVu,
            id_ThuaDat,
            id_XaVien,
            id_HoatDongMuaVu,
            ThoiGian
        );

        return true;
    }

    function LayThongTinHoatDongNhatKy ( uint id_HoatDongNhatKy )
    external view
    returns ( HoatDongNhatKy_Struct memory ) {
        return DanhSachHoatDongNhatKy[ id_HoatDongNhatKy ];
    }
}