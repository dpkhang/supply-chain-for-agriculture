// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;

contract NhatKyDongRuong {
    //--------data-------//
    struct NhatKyDongRuong_Struct {
        uint    id_XaVien;
        uint    id_NhatKyDongRuong;
        uint    id_LichMuaVu;
        uint    id_ThuaDat;
        string  ThongTinKhac;
    }
    /* 
        ThongTinKhac {
            ThoiGian
        }
    */

    mapping( uint => NhatKyDongRuong_Struct )
    public DanhSachNhatKyDongRuong;

    uint maxLength = 0;

    //-------event-------//
    event SuKienThemNhatKyDongRuong(
        uint    id_XaVien,
        uint    id_NhatKyDongRuong,
        uint    id_LichMuaVu,
        uint    id_ThuaDat,
        string  ThongTinKhac
    );

    //------modifier-----//
    modifier KiemTraIdNhatKyDongRuong( uint id_NhatKyDongRuong ) {
        uint index = 0;
        bool checkIdNhatKyDongRuong = true;

        for ( index; index < maxLength; index ++ ) {
            if ( DanhSachNhatKyDongRuong[ index ].id_NhatKyDongRuong 
                 == id_NhatKyDongRuong 
            ) {
                checkIdNhatKyDongRuong = false;
            }
        }

        require(
            checkIdNhatKyDongRuong,
            "Id nhat ky dong ruong phai la duy nhat"
        );
        
        _;
    }

    //-------handle------//
    function ThemNhatKyDongRuong (
        uint            id_XaVien,
        uint            id_NhatKyDongRuong,
        uint            id_LichMuaVu,
        uint            id_ThuaDat,
        string memory   ThongTinKhac
    )
    public
    KiemTraIdNhatKyDongRuong( id_NhatKyDongRuong )
    returns ( bool ) {
        NhatKyDongRuong_Struct memory NhatKyDongRuongMemory;
        NhatKyDongRuongMemory = NhatKyDongRuong_Struct(
            id_XaVien,
            id_NhatKyDongRuong,
            id_LichMuaVu,
            id_ThuaDat,
            ThongTinKhac
        );

        DanhSachNhatKyDongRuong[maxLength] = NhatKyDongRuongMemory;
        maxLength = maxLength + 1;

        emit SuKienThemNhatKyDongRuong(
            id_XaVien,
            id_NhatKyDongRuong,
            id_LichMuaVu,
            id_ThuaDat,
            ThongTinKhac
        );

        return true;
    }
}