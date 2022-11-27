// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;

import "./LoHangLua.sol";

contract GiaoDichMuaBanLua {
    //--------data-------//
    struct GiaoDichMuaBanLua_Struct {
        uint    id_XaVien;
        uint    id_ThuongLai;
        uint    id_GiaoDich;
        uint    id_LoHangLua;
        uint    GiaLoHang;
        uint    ThoiGianGiaoDich;
    }

    mapping ( uint => GiaoDichMuaBanLua_Struct ) public DanhSachGiaoDich;

    mapping ( uint => uint ) public DanhSachIdGiaoDich;

    uint public maxLength = 0;

    //-------event-------//

    event SuKienGiaoDich (
        uint    id_XaVien,
        uint    id_ThuongLai,
        uint    id_GiaoDich,
        uint    id_LoHangLua,
        uint    GiaLoHang,
        uint    ThoiGianGiaoDich
    );

    //------modifier-----//

    modifier KiemTraXacNhan ( bool[] memory boolProperties ) {
        require(
            boolProperties[0] && boolProperties[1] && boolProperties[2],
            "Giao dich chua dong thuan"
        );

        _;
    }

    modifier KiemTraGiaoDich ( uint id_GiaoDich ) {
        require( 
            DanhSachGiaoDich[ id_GiaoDich ].id_GiaoDich == 0,
            "ID giao dich da ton tai"
        );
        
        _;
    }

    modifier KiemTraLoHangDaTonTai( uint id_LoHangLua, address addr ) {
        LoHangLua _loHangLua = LoHangLua(addr);

        require(
            _loHangLua.LayThongTinLoHangLua( id_LoHangLua ).id_LoHangLua == id_LoHangLua,
            "Lo hang lua chua ton tai"
        );

        _;
    }

    modifier KiemTraLoHangDaGiaoDich( uint id_LoHangLua ) {
        uint index = 0;
        bool kiemTraLoHangLua = true;

        for ( index; index < maxLength; index ++ ) {
            uint id_GiaoDichTemp = DanhSachIdGiaoDich[ index ];

            if ( DanhSachGiaoDich[ id_GiaoDichTemp ].id_LoHangLua == id_LoHangLua ) {
                kiemTraLoHangLua = false;
            }
        }

        require(
            kiemTraLoHangLua,
            "Lo hang lua nay da duoc giao dich"
        );

        _;
    }
   

    //-------handle------//
    /*
    intProperties [
        0: uint id_XaVien;
        1: uint id_ThuongLai;
        2: uint id_GiaoDich;
        3: uint id_LoHangLua;
        4: uint GiaLoHang;
        5: uint ThoiGianGiaoDich;
    ]

    stringProperties [
        0: string  TenGiongLua
    ]
    */
    function ThemGiaoDich (
        uint[]      memory intProperties,
        bool[]      memory boolProperties,
        address[]   memory addressProperties
    )
    KiemTraGiaoDich( intProperties[2] )
    KiemTraXacNhan( boolProperties )
    KiemTraLoHangDaTonTai( intProperties[3],  addressProperties[0])
    KiemTraLoHangDaGiaoDich(intProperties[3])
    public
    returns (bool) 
    {

        bool result = LuuThongTinGiaoDich( intProperties );
        
        return result;
    } 

    function LayThongTinGiaoDich (
        uint id_GiaoDich
    )
    external view
    returns ( GiaoDichMuaBanLua_Struct memory ) {
        return DanhSachGiaoDich[ id_GiaoDich ];
    } 

    function LuuThongTinGiaoDich (
        uint[] memory intProperties
    ) 
    internal 
    returns (bool)
    {

        GiaoDichMuaBanLua_Struct memory GiaoDichMuaBanVatTuMemory;

        uint id_XaVien         =  intProperties[0];
        uint id_ThuongLai      =  intProperties[1];
        uint id_GiaoDich       =  intProperties[2];
        uint id_LoHangLua      =  intProperties[3];
        uint GiaLoHang         =  intProperties[4];
        uint ThoiGianGiaoDich  =  intProperties[5];
        

        GiaoDichMuaBanVatTuMemory = GiaoDichMuaBanLua_Struct (
            id_XaVien,
            id_ThuongLai,
            id_GiaoDich,
            id_LoHangLua,
            GiaLoHang,
            ThoiGianGiaoDich
        );

        DanhSachGiaoDich[ intProperties[2] ] = GiaoDichMuaBanVatTuMemory;

        DanhSachIdGiaoDich[ maxLength ] = intProperties[2];
        maxLength = maxLength + 1;

        emit SuKienGiaoDich (
            id_XaVien,
            id_ThuongLai,
            id_GiaoDich,
            id_LoHangLua,
            GiaLoHang,
            ThoiGianGiaoDich
        );

        return true;
    }  
}