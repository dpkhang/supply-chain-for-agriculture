// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;

contract GiaoDichMuaBanLua {
    //--------data-------//
    struct GiaoDichMuaBanLua_Struct {
        uint    id_XaVien;
        uint    id_ThuongLai;
        uint    id_GiaoDich;
        uint    id_GiongLua;
        uint    id_NhatKyDongRuong;
        uint    GiaLoHang;
        uint    SoLuong;
        uint    ThoiGianGiaoDich;
        uint    ThoiGianLoHang;
        string  TenGiongLua;
    }

    mapping ( uint => GiaoDichMuaBanLua_Struct ) 
    public DanhSachGiaoDich;

    //-------event-------//

    event SuKienGiaoDich1 (
        uint    id_XaVien,
        uint    id_ThuongLai,
        uint    id_GiaoDich,
        uint    id_GiongLua,
        uint    id_NhatKyDongRuong
    );

    event SuKienGiaoDich2 (
        uint    id_GiaoDich,
        uint    GiaLoHang,
        uint    SoLuong,
        uint    ThoiGianGiaoDich,
        uint    ThoiGianLoHang,
        string  TenGiongLua
    );

    //------modifier-----//
    modifier KiemTraCacBenLienQuan (
        uint    id_XaVien,
        uint    id_ThuongLai
    ) {
        require(
            id_XaVien != id_ThuongLai,
            'ID thuong lai phai khac ID xa vien'
        );

        _;
    }

    modifier KiemTraIdGiaoDich ( uint id_GiaoDich ) {
        require( 
            DanhSachGiaoDich[ id_GiaoDich ].id_GiaoDich == 0,
            "ID giao dich da ton tai"
        );

        _;
    }

    modifier KiemTraThoiGian ( uint ThoiGianGiaoDich, uint ThoiGianLoHang ) {
        require(
            ThoiGianGiaoDich > ThoiGianLoHang,
            "Thoi gian giao dich phai sau thoi gian lo hang"
        );

        _;
    } 

    modifier KiemTraXacNhan ( bool[] memory boolProperties ) {
        require(
            boolProperties[0] && boolProperties[1] && boolProperties[2],
            "Giao dich chua dong thuan"
        );

        _;
    }
   

    //-------handle------//
    /*
    intProperties [
        0: uint id_XaVien;
        1: uint id_ThuongLai;
        2: uint id_GiaoDich;
        3: uint id_GiongLua;
        4: uint id_NhatKyDongRuong;
        5: uint GiaLoHang;
        6: uint SoLuong;
        7: uint ThoiGianGiaoDich;
        8: uint ThoiGianLoHang;
    ]

    stringProperties [
        0: string  TenGiongLua
    ]
    */
    function ThemGiaoDich (
        uint[]      memory intProperties,
        string[]    memory stringProperties,
        bool[]      memory boolProperties
    )
    KiemTraCacBenLienQuan( intProperties[0], intProperties[1] )
    KiemTraIdGiaoDich( intProperties[2] )
    KiemTraThoiGian( intProperties[7], intProperties[8] )
    KiemTraXacNhan( boolProperties )
    public
    returns (bool) 
    {
        GiaoDichMuaBanLua_Struct memory GiaoDichMuaBanLuaMemory;

        GiaoDichMuaBanLuaMemory = GiaoDichMuaBanLua_Struct (
            intProperties[0],   //gia lo hang
            intProperties[1],   //id xa vien
            intProperties[2],   //id giao dich
            intProperties[3],   //id giong lua
            intProperties[4],   //id nhat ky dong ruong
            intProperties[5],   //gia lo hang
            intProperties[6],   //so luong
            intProperties[7],   //thoi gian giao dich
            intProperties[8],   //thoi gian lo hang
            stringProperties[0] //ten giong lua
        );

        DanhSachGiaoDich[ intProperties[2] ] = GiaoDichMuaBanLuaMemory;

        emit SuKienGiaoDich1 (
            intProperties[0],   //id xa vien
            intProperties[1],   //id xa vien
            intProperties[2],   //id giao dich
            intProperties[3],   //id giong lua
            intProperties[4]    //id nhat ky dong ruong
        );

        emit SuKienGiaoDich2 (
            intProperties[2],   //gia lo hang
            intProperties[5],   //gia lo hang
            intProperties[6],   //so luong
            intProperties[7],   //thoi gian giao dich
            intProperties[8],   //thoi gian lo hang
            stringProperties[0] //ten giong lua
        );

        return true;
    }    
}