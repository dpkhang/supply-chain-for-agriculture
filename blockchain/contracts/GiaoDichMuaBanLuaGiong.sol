// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;

contract GiaoDichMuaBanLuaGiong {
    //---------data---------//
    struct GiaoDichMuaBanLuaGiong_Struct {
        uint    id_GiaoDichLuaGiong;
        uint    id_XaVien;
        uint    id_NhaCungCapVatTu;
        uint    id_LichMuaVu;
        uint    id_GiongLua;
        uint    SoLuong;
        string  TenGiongLua;
        uint    ThoiGian;
    }

    mapping(uint => GiaoDichMuaBanLuaGiong_Struct) public DanhSachGiaoDichMuaBanLuaGiong;

    mapping(uint => uint) public DanhSachIdGiaoDichMuaBanGiongLua;
    uint public maxLength = 0;

    //---------event--------//
    event SuKienGiaoDichMuaBanLuaGiong(
        uint    id_GiaoDichLuaGiong,
        uint    id_XaVien,
        uint    id_NhaCungCapVatTu,
        uint    id_LichMuaVu,
        uint    id_GiongLua,
        uint    SoLuong,
        string  TenGiongLua,
        uint    ThoiGian
    );

    //--------modifier------//
    modifier KiemTraIdGiaoDich(uint id_GiaoDichLuaGiong) {
        require(
            DanhSachGiaoDichMuaBanLuaGiong[id_GiaoDichLuaGiong].id_GiaoDichLuaGiong == 0,
            "Id giao dich mua ban giong lua phai la duy nhat"
        );

        _;
    }

    modifier KiemTraSoLuong(uint SoLuong) {
        require(
            SoLuong > 0,
            "So luong phai lon hon 0"
        );
        
        _;
    }


    //---------handle-------//
    /*
    intProperties [
        0: uint id_GiaoDichLuaGiong,
        1: uint id_XaVien,
        2: uint id_NhaCungCapVatTu,
        3: uint id_LichMuaVu,
        4: uint id_GiongLua,
        5: uint SoLuong,
        6: uint ThoiGian
    ]

    stringProperties [
        0: string TenGiongLua
    ]
    */
    function ThemGiaoDich(
        uint[]      memory intProperties,
        string[]    memory stringProperties
    ) 
    KiemTraIdGiaoDich(intProperties[0])
    KiemTraSoLuong(intProperties[5])
    public returns(bool) {
        GiaoDichMuaBanLuaGiong_Struct memory GiaoDichMuaBanLuaGiongTemp;

        uint id_GiaoDichLuaGiong    = intProperties[0];
        uint id_XaVien              = intProperties[1];
        uint id_NhaCungCapVatTu     = intProperties[2];
        uint id_LichMuaVu           = intProperties[3];
        uint id_GiongLua            = intProperties[4];
        uint SoLuong                = intProperties[5];
        uint ThoiGian               = intProperties[6];

        string memory TenGiongLua   = stringProperties[0];

        GiaoDichMuaBanLuaGiongTemp = GiaoDichMuaBanLuaGiong_Struct(
            id_GiaoDichLuaGiong,
            id_XaVien,
            id_NhaCungCapVatTu,
            id_LichMuaVu,
            id_GiongLua,
            SoLuong,
            TenGiongLua,
            ThoiGian
        );

        DanhSachGiaoDichMuaBanLuaGiong[id_GiaoDichLuaGiong] = GiaoDichMuaBanLuaGiongTemp;
        DanhSachIdGiaoDichMuaBanGiongLua[maxLength] = id_GiaoDichLuaGiong;
        maxLength = maxLength + 1;

        emit SuKienGiaoDichMuaBanLuaGiong(
            id_GiaoDichLuaGiong,
            id_XaVien,
            id_NhaCungCapVatTu,
            id_LichMuaVu,
            id_GiongLua,
            SoLuong,
            TenGiongLua,
            ThoiGian
        );

        return true;
    }

    function LayThongTinGiongLuaBangLichMuaVu(uint id_LichMuaVu)
    public view returns (GiaoDichMuaBanLuaGiong_Struct memory) {
        uint index = 0;
        GiaoDichMuaBanLuaGiong_Struct memory GiaoDichMuaBanGiongLuaData;
        for ( index; index < maxLength; index++ ) {
            uint id_GiaoDichLuaGiong = DanhSachIdGiaoDichMuaBanGiongLua[index];

            if (DanhSachGiaoDichMuaBanLuaGiong[id_GiaoDichLuaGiong].id_LichMuaVu == id_LichMuaVu) {
                GiaoDichMuaBanGiongLuaData = DanhSachGiaoDichMuaBanLuaGiong[id_GiaoDichLuaGiong];
                break;
            }
        }

        return GiaoDichMuaBanGiongLuaData;
    }
}