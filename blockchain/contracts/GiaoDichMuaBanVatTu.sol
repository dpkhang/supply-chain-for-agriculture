// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;

import "./LoHangVatTu.sol";

contract GiaoDichMuaBanVatTu {
    //--------data-------//
    struct GiaoDichMuaBanVatTu_Struct {
        uint    id_XaVien;
        uint    id_NhaCungCap;  
        uint    id_GiaoDich;
        uint    id_LoHangVatTu;
        uint    GiaLoHang;
        uint    ThoiGianGiaoDich;
    }

    mapping ( uint => GiaoDichMuaBanVatTu_Struct ) 
    public DanhSachGiaoDich;

    //List id giao dich, use for check id lohang
    mapping ( uint => uint )
    public DanhSachIdGiaoDich;

    uint public maxLength = 0;

    //-------event-------//
    event SuKienGiaoDich1 (
        uint    id_XaVien,
        uint    id_NhaCungCap,  
        uint    id_GiaoDich,
        uint    id_LoHangVatTu,
        uint    GiaLoHang,
        uint    ThoiGianGiaoDich
    );

    event SuKienGiaoDich2 (
        uint    id_XaVien,
        uint    id_LoHangVatTu,
        uint    GiaLoHang,
        uint    ThoiGianGiaoDich
    );

    //------modifier-----//
    modifier KiemTraIdCacBenLienQuan (
        uint id_XaVien,
        uint id_NhaCungCap
    ) {
        require( 
            id_XaVien != id_NhaCungCap,
            "ID xa vien phai khac ID thuong lai"
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

    modifier KiemTraGiaoDich ( uint id_GiaoDich ) {
        require( 
            DanhSachGiaoDich[ id_GiaoDich ].id_GiaoDich == 0,
            "ID giao dich da ton tai"
        );
        
        _;
    }

    modifier KiemTraLoHangDaTonTai( uint id_LoHangVatTu, address addr ) {
        LoHangVatTu _loHangVatTu = LoHangVatTu(addr);

        require(
            _loHangVatTu.LayThongTinVatTu( id_LoHangVatTu ).id_LoHangVatTu == id_LoHangVatTu,
            "Lo hang vat tu chua ton tai"
        );

        _;
    }

    modifier KiemTraLoHangDaGiaoDich( uint id_LoHangVatTu ) {
        uint index = 0;
        bool kiemTraLoHangVatTu = true;

        for ( index; index < maxLength; index ++ ) {
            uint id_GiaoDichTemp = DanhSachIdGiaoDich[ index ];

            if ( DanhSachGiaoDich[ id_GiaoDichTemp ].id_LoHangVatTu == id_LoHangVatTu ) {
                kiemTraLoHangVatTu = false;
            }
        }

        require(
            kiemTraLoHangVatTu,
            "Lo hang vat tu nay da duoc giao dich"
        );

        _;
    }

    //-------handle------//
    /*
    intProperties [
        0: uint id_XaVien;
        1: uint id_NhaCungCap;
        2: uint id_GiaoDich;
        3: uint id_LoHangVatTu;
        4: uint GiaLoHang;
        5: uint ThoiGianGiaoDich;
    ]

    boolProperties [
        0: bool xaVienXacNhan;
        1: bool nhaCungCapXacNhan;
        2: bool HTXXacNhan;
    ]

    */
    function ThemGiaoDich (
        uint[]      memory intProperties,
        bool[]      memory boolProperties,
        address[]   memory addressProperties
    ) 
    public
    KiemTraIdCacBenLienQuan( intProperties[0], intProperties[1] )
    KiemTraGiaoDich( intProperties[2] )
    KiemTraLoHangDaGiaoDich( intProperties[3] )
    KiemTraLoHangDaTonTai( intProperties[3], addressProperties[0] )
    KiemTraXacNhan( boolProperties )
    returns (bool) 
    {
        bool result = LuuThongTinGiaoDich( intProperties );
        
        return result;
    }    

    function LayThongTinGiaoDich (
        uint id_GiaoDich
    )
    external view
    returns ( GiaoDichMuaBanVatTu_Struct memory ) {
        return DanhSachGiaoDich[ id_GiaoDich ];
    }

    //use internal function for fix "Stack too deep"
    /*
    intProperties [
        0: uint id_XaVien;
        1: uint id_NhaCungCap;
        2: uint id_GiaoDich;
        3: uint id_LoHangVatTu;
        4: uint GiaLoHang;
        5: uint ThoiGianGiaoDich;
    ]
    */
    function LuuThongTinGiaoDich (
        uint[] memory intProperties
    ) 
    internal 
    returns (bool)
    {

        GiaoDichMuaBanVatTu_Struct memory GiaoDichMuaBanVatTuMemory;

        uint id_XaVien          =  intProperties[0];
        uint id_NhaCungCap      =  intProperties[1];
        uint id_GiaoDich        =  intProperties[2];
        uint id_LoHangVatTu     =  intProperties[3];
        uint GiaLoHang          =  intProperties[4];
        uint ThoiGianGiaoDich   =  intProperties[5];
        

        GiaoDichMuaBanVatTuMemory = GiaoDichMuaBanVatTu_Struct (
            id_XaVien,
            id_NhaCungCap,
            id_GiaoDich,
            id_LoHangVatTu,
            GiaLoHang,
            ThoiGianGiaoDich
        );

        DanhSachGiaoDich[ intProperties[2] ] = GiaoDichMuaBanVatTuMemory;

        DanhSachIdGiaoDich[ maxLength ] = intProperties[2];
        maxLength = maxLength + 1;

        emit SuKienGiaoDich1 (
            id_XaVien,
            id_NhaCungCap,
            id_GiaoDich,
            id_LoHangVatTu,
            GiaLoHang,
            ThoiGianGiaoDich
        );

        return true;
    }
}