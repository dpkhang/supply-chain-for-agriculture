// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;

contract LoHangVatTu {
    //--------data-------//
    struct LoHangVatTu_Struct {
        uint    id_LoHangVatTu;
        uint    id_Muavu;
        uint    id_VatTu;
        uint    SoLuong;
        uint    ThoiGian;
        string  TenVatTu;
    }

    mapping( uint => LoHangVatTu_Struct )
    public DanhSachLoHangVatTu;

    //-------event-------//
    event SuKienThemLoHangVatTu (
        uint    id_LoHangVatTu,
        uint    id_Muavu,
        uint    id_VatTu,
        uint    SoLuong,
        uint    ThoiGian,
        string  TenVatTu
    );

    //------modifier-----//
    modifier KiemTraIdLoHangVatTu (  uint id_LoHangVatTu ) {
        require(
            DanhSachLoHangVatTu[ id_LoHangVatTu ].id_LoHangVatTu == 0,
            "Lo hang vat tu da ton tai"
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

    //-------handle------//
    /*
    intProperties [
        0: uint            id_LoHangVatTu
        1: uint            id_Muavu,
        2: uint            id_VatTu,
        3: uint            SoLuong,
        4: uint            ThoiGian
    ]

    stringProperties [
        0: string memory   TenVatTu
    ]
    */

    function ThemLohangVatTu (
        uint[]   memory intProperties,
        string[] memory stringProperties
    ) 
    public
    KiemTraIdLoHangVatTu( intProperties[0] )
    KiemTraSoLuong( intProperties[3] )
    returns ( bool )
    {
        LoHangVatTu_Struct memory LoHangVatTuMemory;
        LoHangVatTuMemory = LoHangVatTu_Struct (
            intProperties[0],
            intProperties[1],
            intProperties[2],
            intProperties[3],
            intProperties[4],
            stringProperties[0]
        );

        DanhSachLoHangVatTu[ intProperties[0] ] = LoHangVatTuMemory;

        emit SuKienThemLoHangVatTu (
            intProperties[0],
            intProperties[1],
            intProperties[2],
            intProperties[3],
            intProperties[4],
            stringProperties[0]
        );

        return true;
    }

    function LayThongTinVatTu (
        uint id_LoHangVatTu
    ) external view
    returns ( LoHangVatTu_Struct memory ) {
        return DanhSachLoHangVatTu[ id_LoHangVatTu ];
    }
}