// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;

contract LoHangLua {
    //--------data-------//
    struct LoHangLua_Struct {
        uint    id_XaVien;
        uint    id_LoHangLua;
        uint    id_GiongLua;
        uint    id_NhatKyDongRuong;
        uint    SoLuong;
        string  ThoiGian;
    }

    mapping ( uint => LoHangLua_Struct )
    public DanhSachLoHangLua;

    uint public maxLength = 0;

    //-------event-------//
    event SuKienThemLoHang (
        uint    id_XaVien,
        uint    id_LoHangLua,
        uint    id_GiongLua,
        uint    id_NhatKyDongRuong,
        uint    SoLuong,
        string  ThoiGian
    );

    //------modifier-----//
    modifier KiemTraSoLuong ( uint SoLuong ) {
        require( 
            SoLuong > 0,
            "So luong phai lon hon 0"
        );

        _;
    }

    modifier KiemTraLoHangLua ( 
        uint id_LoHangLua, 
        uint id_NhatKyDongRuong 
    ) {
        uint index                  = 0;
        bool checkIdLoHangLua       = true;
        bool checkIdNhatKyDongRuong = true;

        for ( index; index < maxLength; index ++ ) {
            if ( DanhSachLoHangLua[ index ].id_LoHangLua == id_LoHangLua ) {
                checkIdLoHangLua = false;
            }

            if ( DanhSachLoHangLua[ index ].id_NhatKyDongRuong == id_NhatKyDongRuong ) {
                checkIdNhatKyDongRuong = false;
            }
        }

        require(
            checkIdLoHangLua || checkIdNhatKyDongRuong,
            string.concat(
                "ID lo hang phai la duy nhat ",
                "ID lo nhat ky dong ruong phai la duy nhat"
            )
        );

        require (
            checkIdLoHangLua,
             "ID lo hang lua phai la duy nhat"
        );

        require (
            checkIdNhatKyDongRuong,
            "ID lo nhat ky dong ruong phai la duy nhat"
        );

        _;
    }

    //-------handle------//
    function ThemLoHangLua (
        uint            id_XaVien,
        uint            id_LoHangLua,
        uint            id_GiongLua,
        uint            id_NhatKyDongRuong,
        uint            SoLuong,
        string memory   ThoiGian
    )
    public 
    KiemTraLoHangLua(
        id_LoHangLua,
        id_NhatKyDongRuong
    )
    KiemTraSoLuong( SoLuong )
    returns (bool) 
    {
        LoHangLua_Struct memory LoHangLuaMemory;

        LoHangLuaMemory = LoHangLua_Struct (
            id_XaVien,
            id_LoHangLua,
            id_GiongLua,
            id_NhatKyDongRuong,
            SoLuong,
            ThoiGian
        );

        DanhSachLoHangLua[maxLength] = LoHangLuaMemory;
        maxLength = maxLength + 1;

        emit SuKienThemLoHang(
            id_XaVien,
            id_LoHangLua,
            id_GiongLua,
            id_NhatKyDongRuong,
            SoLuong,
            ThoiGian
        );

        return true;
    }
}