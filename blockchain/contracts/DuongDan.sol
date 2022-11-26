// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;

contract LoHangLua {
    //--------data-------//
    struct duongDanTruyXuat_Struct {
        string duongDanTruyXuat;
    }

    mapping ( uint => duongDanTruyXuat_Struct ) public DanhSachDuongDanTruyXuat;

    uint public maxLength = 0;

    //-------event-------//
    event SuKienDuongDanTruyXuat (
        string duongDan,
        uint id_LoHangLua
    );

    /*
        intProperties[]
        0: string    id_XaVien;
    */

    //-------handle------//
    function ThemDuongDan (
        string memory duongDan,
        uint id_LoHangLua
    )
    public 
    returns (bool) 
    {
        duongDanTruyXuat_Struct memory duongDangTruyXuat = duongDanTruyXuat_Struct(duongDan);
        DanhSachDuongDanTruyXuat[id_LoHangLua] = duongDangTruyXuat;
        emit SuKienDuongDanTruyXuat(
            duongDan,
            id_LoHangLua
        );
        return true;
    }
}