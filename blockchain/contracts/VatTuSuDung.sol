// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;
import "./LoHangVatTu.sol";

contract VatTuSuDung {
    //--------data-------//
    struct VatTuSuDung_Struct {
        uint    id_VatTuSuDung;
        uint    id_HoatDongNhatKy;
        uint    id_VatTu;
        uint    id_LoHangVatTu;
        uint    ThoiGianVatTu;
        string  TenVatTu;
    }

    mapping( uint => VatTuSuDung_Struct )
    public DanhSachVatTuSuDung;

    uint maxLength = 0;

    //-------event-------//
    event SuKienThemVatTuNongNghiep (
        uint    id_VatTuSuDung,
        uint    id_HoatDongNhatKy,
        uint    id_VatTu,
        uint    id_LoHangVatTu,
        uint    ThoiGianVatTu,
        string  TenVatTu
    );

    //------modifier-----//
    modifier KiemTraIdVatTuSuDung( uint id_VatTuSuDung ) {
        require( 
            DanhSachVatTuSuDung[ id_VatTuSuDung ].id_VatTuSuDung == 0,
            "ID vat tu su dung da ton tai"
        );
        
        _;
    }

    modifier KiemTraVatTuSuDung ( uint id_LoHangVatTu, address addr ) {
        LoHangVatTu _loHangVatTu = LoHangVatTu(addr);
        require(
            _loHangVatTu.LayThongTinVatTu( id_LoHangVatTu ).id_LoHangVatTu == id_LoHangVatTu,
            "Lo hang vat tu chua ton tai"
        );
        
        _;
    }

    /*
    intProperties [
        0: uint            id_VatTuSuDung
        1: uint            id_HoatDongNhatKy,
        2: uint            id_VatTu,
        3: uint            id_LoHangVatTu,
        4: uint            ThoiGianVatTu
    ]

    stringProperties [
        0: string memory   TenVatTu
    ]

    addressProperties [
        0: address addContractGiaoDichMuaBanLua
    ]
    */

    //-------handle------//
    function ThemVatTuNongNghiep (
       uint[]    memory intProperties,
       string[]  memory stringProperties,
       address[] memory addressProperties
    )
    public
    KiemTraIdVatTuSuDung( intProperties[0] )
    KiemTraVatTuSuDung( intProperties[3], addressProperties[0] )
    returns (bool)
    {
        VatTuSuDung_Struct memory VatTuSuDungMemory;
        VatTuSuDungMemory = VatTuSuDung_Struct(
            intProperties[0],
            intProperties[1],
            intProperties[2],
            intProperties[3],
            intProperties[4],
            stringProperties[0]
        );

        DanhSachVatTuSuDung[maxLength] = VatTuSuDungMemory;
        maxLength = maxLength + 1;

        emit SuKienThemVatTuNongNghiep(
            intProperties[0],
            intProperties[1],
            intProperties[2],
            intProperties[3],
            intProperties[4],
            stringProperties[0]
        );

        return true;
    }

}