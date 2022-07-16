// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;

contract NhatKyDongRuong {
    //--------data-------//
    struct NhatKyDongRuong_Struct {
        uint    id_XaVien;
        uint    id_NhatKyDongRuong;
        uint    id_LichMuaVu;
        uint    id_ThuaDat;
        uint    ThoiGian;
    }

    mapping( uint => NhatKyDongRuong_Struct ) public DanhSachNhatKyDongRuong;

    uint maxLength = 0;

    //-------event-------//
    event SuKienThemNhatKyDongRuong(
        uint    id_XaVien,
        uint    id_NhatKyDongRuong,
        uint    id_LichMuaVu,
        uint    id_ThuaDat,
        uint    ThoiGian
    );

    //------modifier-----//
    modifier KiemTraIdNhatKyDongRuong( uint id_NhatKyDongRuong ) {

        require(
            DanhSachNhatKyDongRuong[ id_NhatKyDongRuong ].id_NhatKyDongRuong == 0,
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
        uint            ThoiGian
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
            ThoiGian
        );

        DanhSachNhatKyDongRuong[ id_NhatKyDongRuong ] = NhatKyDongRuongMemory;
        maxLength = maxLength + 1;

        emit SuKienThemNhatKyDongRuong(
            id_XaVien,
            id_NhatKyDongRuong,
            id_LichMuaVu,
            id_ThuaDat,
            ThoiGian
        );

        return true;
    }


    function LayNhatKyDongRuong(
        uint id_NhatKyDongRuong
    ) 
    external
    view
    returns (NhatKyDongRuong_Struct memory) 
    {
        return DanhSachNhatKyDongRuong[ id_NhatKyDongRuong ];
    }
}