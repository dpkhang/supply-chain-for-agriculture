// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;

contract LoHangSanPham {
    struct LoHangSanPham_Struct {
        uint id_LoHangSanPham;
        uint id_NguoiTieuDung;
        uint id_NguoiBan;
        uint id_LoHangLua;
        uint SoLuong;
        uint ThoiGian;
    }

    mapping(uint => LoHangSanPham_Struct) public DanhSachLoHangSanPham;
    mapping (uint => uint) public DanhSachIdLoHangSanPham;
    uint maxLength = 0;

    event SuKienThemLoHang(
        uint id_LoHangSanPham,
        uint id_NguoiTieuDung, 
        uint id_NguoiBan,
        uint id_LoHangLua,
        uint SoLuong,
        uint ThoiGian
    );

    modifier KiemTraIdLoHangSanPham (uint id_LoHangSanPham) {
        require (
            DanhSachLoHangSanPham[ id_LoHangSanPham ].id_LoHangSanPham == 0,
            "Lo hang san pham da ton tai"
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

    modifier KiemLoHangLua (uint id_LoHangLua) {
        uint index = 0;
        bool check = true;

        for (index; index < maxLength; index++) {
            uint id_LoHangSanPham = DanhSachIdLoHangSanPham[index];
            uint _id_LoHangLua = DanhSachLoHangSanPham[id_LoHangSanPham].id_LoHangLua;
            if (_id_LoHangLua == id_LoHangLua) {
                check = false;
                break;
            }
        } 

        require(
            check,
            "Lo hang lua da ton tai"
        );
        _;
    }

        //-------handle------//
    /*
    intProperties [
        0: uint            id_LoHangSanPham
        1: uint            id_NguoiTieuDung,
        2: uint            id_NguoiBan,
        3: uint            SoLuong,
        4: uint            ThoiGian
    ]
    */

    function LuuThongTinLoHangSanPham (
        uint[] memory intProperties
    ) 
    internal
    returns (bool)
    {
        LoHangSanPham_Struct memory LoHangSanPhamMermory;
        uint id_LoHangSanPham = intProperties[0];
        uint id_NguoiTieuDung = intProperties[1];
        uint id_NguoiBan = intProperties[2];
        uint SoLuong = intProperties[3];
        uint ThoiGian = intProperties[4];
        uint id_LoHangLua = intProperties[5];

        LoHangSanPhamMermory = LoHangSanPham_Struct(
            id_LoHangSanPham,
            id_NguoiTieuDung,
            id_NguoiBan,
            id_LoHangLua,
            SoLuong,
            ThoiGian
        );

        DanhSachIdLoHangSanPham[ maxLength ] = intProperties[0];
        maxLength = maxLength + 1;

        DanhSachLoHangSanPham[ id_LoHangSanPham ] = LoHangSanPhamMermory;

        emit SuKienThemLoHang(id_LoHangSanPham, id_NguoiTieuDung, id_NguoiBan, id_LoHangLua, SoLuong, ThoiGian);

        return true;
    }

    function ThemLoHangSanPham (
        uint[]   memory intProperties
    )
    public
    KiemTraIdLoHangSanPham(intProperties[0])
    KiemTraSoLuong(intProperties[3])
    returns(bool)
    {
        bool result = LuuThongTinLoHangSanPham(intProperties);
        return result;
    }

    function LayThongTinSanPham(uint id_LoHangSanPham)
    external view
    returns (LoHangSanPham_Struct memory)
    {
        return DanhSachLoHangSanPham[ id_LoHangSanPham ];
    }


}