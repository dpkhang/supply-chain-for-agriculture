// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;

contract HoatDongNhatKy {
    //--------data-------//
    struct HoatDongNhatKy_Struct {
        uint id_NhatKyDongRuong;
        uint id_XaVien;
        uint id_HoatDongNhatKy;
        string ThoiGian;
    }

    mapping( uint => HoatDongNhatKy_Struct )
    public DanhSachHoatDongNhatKy;

    uint maxLength = 0;

    //-------event-------//
    event SuKienThemHoatDongNhatKy(
        uint id_NhatKyDongRuong,
        uint id_XaVien,
        uint id_HoatDongNhatKy,
        string ThoiGian
    );

    //------modifier-----//
    modifier KiemTraHoatDongNhatKy( 
        uint id_NhatKyDongRuong, 
        uint id_HoatDongNhatKy 
    ) {
        uint index                  = 0;
        bool checkIdNhatKyDongRuong = true;
        bool checkIdHoatDongNhatKy  = true;

        for ( index; index < maxLength; index ++ ) {
            if ( DanhSachHoatDongNhatKy[ index ].id_NhatKyDongRuong 
                 == id_NhatKyDongRuong 
            ) {
                checkIdNhatKyDongRuong = false;
            }

            if ( DanhSachHoatDongNhatKy[ index ].id_HoatDongNhatKy 
                 == id_HoatDongNhatKy 
            ) {
                checkIdHoatDongNhatKy = false;
            }
        }

        require(
            checkIdNhatKyDongRuong || checkIdHoatDongNhatKy,
            string.concat(
                "Id nhat ky dong ruong phai la duy nhat ",
                "ID hoat dong nhat ky lua phai la duy nhat"
            )
        );

        require (
            checkIdHoatDongNhatKy,
            "ID hoat dong nhat ky lua phai la duy nhat"
        );

        require(
            checkIdNhatKyDongRuong,
            "Id nhat ky dong ruong phai la duy nhat"
        );
        
        _;
    }

    //-------handle------//
    function ThemHoatDongNhatKy (
        uint id_NhatKyDongRuong,
        uint id_XaVien,
        uint id_HoatDongNhatKy,
        string memory ThoiGian
    )
    public
    KiemTraHoatDongNhatKy( 
        id_NhatKyDongRuong,
        id_HoatDongNhatKy
    )
    returns ( bool ) {
        HoatDongNhatKy_Struct memory HoatDongNhatKyMemory;
        HoatDongNhatKyMemory = HoatDongNhatKy_Struct(
            id_NhatKyDongRuong,
            id_XaVien,
            id_HoatDongNhatKy,
            ThoiGian
        );

        DanhSachHoatDongNhatKy[maxLength] = HoatDongNhatKyMemory;
        maxLength = maxLength + 1;

        emit SuKienThemHoatDongNhatKy(
            id_NhatKyDongRuong,
            id_XaVien,
            id_HoatDongNhatKy,
            ThoiGian
        );

        return true;
    }
}