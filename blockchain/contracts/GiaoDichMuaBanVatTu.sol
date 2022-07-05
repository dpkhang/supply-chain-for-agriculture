// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;

contract GiaoDichMuaBanVatTu {
    //--------data-------//
    struct GiaoDichMuaBanVatTu_Struct {
        uint    id_XaVien;
        uint    id_NhaCungCap;  
        uint    id_LoHangVatTu;
        uint    id_GiaoDich;
        string  ThoiGian;
    }

    mapping ( uint => GiaoDichMuaBanVatTu_Struct ) 
    public DanhSachGiaoDich;

    uint public maxLength = 0;

    //-------event-------//
    event SuKienGiaoDich (
        uint    id_XaVien,
        uint    id_NhaCungCap,
        uint    id_LoHangVatTu,
        uint    id_GiaoDich,
        string  ThoiGian
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

    modifier KiemTraXacNhan( bool XacNhanChung ) {
        require (
            XacNhanChung, 
            "Giao dich chua duoc dong thuan"
        );

        _;
    }

    modifier KiemTraLoHangVatTu ( uint id_LoHangVatTu, uint id_GiaoDich ) {
        uint index              = 0;
        bool checkIdLoHangVatTu = true;
        bool checkIdGiaoDich    = true;

        for ( index; index < maxLength; index ++ ) {
            if ( DanhSachGiaoDich[ index ].id_GiaoDich == id_GiaoDich ) {
                checkIdGiaoDich = false;
            }

            if ( DanhSachGiaoDich[ index ].id_LoHangVatTu == id_LoHangVatTu ) {
                checkIdLoHangVatTu = false;
            }
        }

        require(
            checkIdGiaoDich || checkIdLoHangVatTu,
            string.concat(
                "ID lo giao dich phai la duy nhat ",
                "ID lo hang vat tu phai la duy nhat"
            )
        );

        require (
            checkIdGiaoDich,
            "ID lo giao dich phai la duy nhat"
        );

        require (
            checkIdLoHangVatTu,
            "ID lo hang vat tu phai la duy nhat"
        );

        _;
    }

    //-------handle------//
    function ThemGiaoDich (
        uint id_XaVien,
        uint id_NhaCungCap,
        uint id_LoHangVatTu,
        uint id_GiaoDich,
        string memory ThoiGian
        //bool XacNhanChung
    ) 
    public
    KiemTraIdCacBenLienQuan( id_XaVien, id_NhaCungCap )
    KiemTraLoHangVatTu( id_LoHangVatTu, id_GiaoDich )
    returns (bool) 
    {
        // require (
        //     XacNhanChung, 
        //     "Giao dich chua duoc dong thuan"
        // );

        GiaoDichMuaBanVatTu_Struct memory GiaoDichMuaBanVatTuMemory;

        GiaoDichMuaBanVatTuMemory = GiaoDichMuaBanVatTu_Struct (
            id_XaVien,
            id_NhaCungCap,
            id_LoHangVatTu,
            id_GiaoDich,
            ThoiGian
        );

        DanhSachGiaoDich[maxLength] = GiaoDichMuaBanVatTuMemory;
        maxLength = maxLength + 1;

        emit SuKienGiaoDich(
            id_XaVien,
            id_NhaCungCap,
            id_LoHangVatTu,
            id_GiaoDich,
            ThoiGian
        );

        return true;
    }    
}