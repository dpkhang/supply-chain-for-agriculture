// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;

import "./nhatkydongruong.sol";

contract LoHangLua {
    //--------data-------//
    struct LoHangLua_Struct {
        uint    id_XaVien;
        uint    id_LoHangLua;
        uint    id_GiongLua;
        uint    id_NhatKyDongRuong;
        uint    SoLuong;
        uint    ThoiGian;
        string  TenGiongLua;
    }

    mapping ( uint => LoHangLua_Struct ) public DanhSachLoHangLua;

    mapping ( uint => uint ) public DanhSachIdNhatKyDongRuong;

    uint public maxLength = 0;

    //-------event-------//
    event SuKienThemLoHang (
        uint    id_XaVien,
        uint    id_LoHangLua,
        uint    id_GiongLua,
        uint    id_NhatKyDongRuong,
        uint    SoLuong,
        uint    ThoiGian,
        string  TenGiongLua
    );

    //------modifier-----//
    modifier KiemTraIdLoHangLua (  uint id_LoHangLua ) {
        require(
            DanhSachLoHangLua[ id_LoHangLua ].id_LoHangLua == 0,
            "Lo hang vat tu da ton tai"
        );

        _;
    }

    modifier KiemTraSoLuong ( uint SoLuong, uint DienTichDat, uint max_SanLuong ) {
        require(
            SoLuong > 0,
            "So luong phai lon hon 0"
        );

        require(
            SoLuong <= max_SanLuong*DienTichDat,
            "So luong phai nho hon hoac bang tong san luong"
        );

        _;
    }

    modifier KiemTraNhatKyDongRuong ( 
        uint id_NhatKyDongRuong,
        address addr
    ) {
        NhatKyDongRuong nhatkydongruong = NhatKyDongRuong(addr);
        require(
            nhatkydongruong.LayNhatKyDongRuong( id_NhatKyDongRuong ).id_NhatKyDongRuong == id_NhatKyDongRuong,
            "Nhat ky dong ruong chua ton tai"
        );
        _;
    }

    modifier KiemTraIdNhatKyDongRuong(
        uint id_NhatKyDongRuong
    ) {
        uint index = 0;
        bool kiemTraNhatKyRuongDong = true;

        for ( index; index < maxLength; index ++ ) {
            uint id_NhatKyRuongDongTemp = DanhSachIdNhatKyDongRuong[ index ];

            if ( DanhSachLoHangLua[ id_NhatKyRuongDongTemp ].id_NhatKyDongRuong == id_NhatKyDongRuong ) {
                kiemTraNhatKyRuongDong = false;
            }
        }

        require(
            kiemTraNhatKyRuongDong,
            "Nhat ky dong ruong nay da duoc su dung"
        );

        _;
    }
    /*
        intProperties[]
        0: uint    id_XaVien;
        1: uint    id_LoHangLua;
        2: uint    id_GiongLua;
        3: uint    id_NhatKyDongRuong;
        4: uint    SoLuong;
        5: uint    ThoiGian;
        6: uint    DienTichDat;
        7: uint    max_SanLuong;

        stringProperties[]
        0: string TenGiongLua
    */

    //-------handle------//
    function ThemLoHangLua (
        uint[]      memory intProperties,
        address[]   memory addressProperties,
        string[]    memory stringProperties
    )
    public 
    KiemTraIdLoHangLua( intProperties[1] )
    KiemTraSoLuong( intProperties[4], intProperties[6], intProperties[7] )
    KiemTraNhatKyDongRuong( intProperties[3], addressProperties[0])
    KiemTraIdNhatKyDongRuong( intProperties[3] )
    returns (bool) 
    {
        bool result = LuuThongTinLoHangLua( intProperties, stringProperties );
        
        return result;
    }

    function LayThongTinLoHangLua(
        uint id_LoHangLua
    )
    external
    view
    returns (LoHangLua_Struct memory) {
        return DanhSachLoHangLua[ id_LoHangLua ];
    }

    function LuuThongTinLoHangLua (
        uint[] memory intProperties,
        string[] memory stringProperties
    ) 
    internal 
    returns (bool)
    {

        LoHangLua_Struct memory LoHangLuaMemory;

        uint id_XaVien            =  intProperties[0];
        uint id_LoHangLua         =  intProperties[1];
        uint id_GiongLua          =  intProperties[2];
        uint id_NhatKyDongRuong   =  intProperties[3];
        uint SoLuong              =  intProperties[4];
        uint ThoiGian             =  intProperties[5];
        string memory TenGiongLua =  stringProperties[0];
        

        LoHangLuaMemory = LoHangLua_Struct (
            id_XaVien,
            id_LoHangLua,
            id_GiongLua,
            id_NhatKyDongRuong,
            SoLuong,
            ThoiGian,
            TenGiongLua
        );

        DanhSachLoHangLua[ intProperties[1] ] = LoHangLuaMemory;

        DanhSachIdNhatKyDongRuong[ maxLength ] = intProperties[1];
        maxLength = maxLength + 1;

        emit SuKienThemLoHang (
            id_XaVien,
            id_LoHangLua,
            id_GiongLua,
            id_NhatKyDongRuong,
            SoLuong,
            ThoiGian,
            TenGiongLua
        );

        return true;
    }  
}