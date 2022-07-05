// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;

contract GiaoDichMuaBanLua {
    //--------data-------//
    struct GiaoDichMuaBanLua_Struct {
        uint id_XaVien;
        uint id_ThuongLai;  
        uint id_LoHangLua;
        uint id_GiaoDich;
        string ThoiGian;
    }

    mapping ( uint => GiaoDichMuaBanLua_Struct ) 
    public DanhSachGiaoDich;

    uint public maxLength = 0;

    //-------event-------//
    event SuKienGiaoDich (
        uint id_GiaoDich,
        uint id_LoHangLua,
        uint id_XaVien,
        uint id_ThuongLai,
        string ThoiGian
    );

    //------modifier-----//
    modifier KiemTraIdCacBenLienQuan (
        uint id_XaVien,
        uint id_ThuongLai
    ) {
        require( 
            id_XaVien != id_ThuongLai,
            "ID xa vien phai khac ID thuong lai"
        );

        _;
    }

    modifier KiemTraLoHangLua ( uint id_LoHangLua, uint id_GiaoDich ) {
        uint index            = 0;
        bool checkIdLoHangLua = true;
        bool checkIdGiaoDich  = true;

        for ( index; index < maxLength; index ++ ) {
            if ( DanhSachGiaoDich[ index ].id_GiaoDich == id_GiaoDich ) {
                checkIdGiaoDich = false;
            }

            if ( DanhSachGiaoDich[ index ].id_LoHangLua == id_LoHangLua ) {
                checkIdLoHangLua = false;
            }
        }

        require(
            checkIdGiaoDich || checkIdLoHangLua,
            string.concat(
                "ID lo giao dich phai la duy nhat ",
                "ID lo hang lua phai la duy nhat"
            )
        );

        require (
            checkIdGiaoDich,
            "ID lo giao dich phai la duy nhat"
        );

        require (
            checkIdLoHangLua,
            "ID lo hang lua phai la duy nhat"
        );

        _;
    }

    //-------handle------//
    function ThemGiaoDich (
        uint id_XaVien,
        uint id_ThuongLai,
        uint id_LoHangLua,
        uint id_GiaoDich,
        string memory ThoiGian
    ) 
    public
    KiemTraIdCacBenLienQuan(id_XaVien, id_ThuongLai)
    KiemTraLoHangLua( id_LoHangLua, id_GiaoDich )
    returns (bool) 
    {
        GiaoDichMuaBanLua_Struct memory GiaoDichMuaBanLuaMemory;

        GiaoDichMuaBanLuaMemory = GiaoDichMuaBanLua_Struct (
            id_XaVien,
            id_ThuongLai,
            id_LoHangLua,
            id_GiaoDich,
            ThoiGian
        );

        DanhSachGiaoDich[maxLength] = GiaoDichMuaBanLuaMemory;
        maxLength = maxLength + 1;

        emit SuKienGiaoDich(
            id_LoHangLua,
            id_XaVien,
            id_ThuongLai,
            id_GiaoDich,
            ThoiGian
        );

        return true;
    }    
}