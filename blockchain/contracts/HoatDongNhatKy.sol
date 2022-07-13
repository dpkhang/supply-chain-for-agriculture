// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;
import "./nhatkydongruong.sol";

contract HoatDongNhatKy {
    //--------data-------//
    struct HoatDongNhatKy_Struct {
        uint id_NhatKyDongRuong;
        uint id_HoatDongNhatKy;
        uint ThoiGian;
    }

    mapping( uint => HoatDongNhatKy_Struct ) public DanhSachHoatDongNhatKy;

    //-------event-------//
    event SuKienThemHoatDongNhatKy(
        uint id_NhatKyDongRuong,
        uint id_HoatDongNhatKy,
        uint ThoiGian
    );

    //------modifier-----//
    modifier KiemTraIDHoatDongNhatKy ( uint id_HoatDongNhatKy ) {
        require(
            DanhSachHoatDongNhatKy[ id_HoatDongNhatKy ].id_HoatDongNhatKy == 0,
            "Hoat dong nhat ky da ton tai"
        );

        _;
    }

    modifier KiemTraIDNhatKyDongRuong ( uint id_NhatKyDongRuong, address addr ) {
        NhatKyDongRuong _nhatKyDongRuong = NhatKyDongRuong( addr );
        
        require(
            _nhatKyDongRuong.LayNhatKyDongRuong( id_NhatKyDongRuong ).id_NhatKyDongRuong == id_NhatKyDongRuong,
            "Nhat ky dong ruong chua ton tai"
        );

        _;
    }

    //-------handle------//
    function ThemHoatDongNhatKy (
        uint id_NhatKyDongRuong,
        uint id_HoatDongNhatKy,
        uint ThoiGian,
        address addressNhatKyDongRuong
    )
    public
    KiemTraIDHoatDongNhatKy( id_HoatDongNhatKy )
    KiemTraIDNhatKyDongRuong( id_NhatKyDongRuong, addressNhatKyDongRuong )
    returns ( bool ) {
        HoatDongNhatKy_Struct memory HoatDongNhatKyMemory;
        HoatDongNhatKyMemory = HoatDongNhatKy_Struct(
            id_NhatKyDongRuong,
            id_HoatDongNhatKy,
            ThoiGian
        );

        DanhSachHoatDongNhatKy[ id_HoatDongNhatKy ] = HoatDongNhatKyMemory;

        emit SuKienThemHoatDongNhatKy(
            id_NhatKyDongRuong,
            id_HoatDongNhatKy,
            ThoiGian
        );

        return true;
    }
}