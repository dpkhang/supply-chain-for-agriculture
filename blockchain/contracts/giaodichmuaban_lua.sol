// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;

contract GiaoDichMuaBan_Lua {
    
    //-------------data--------------//
    struct GiaoDich {
        uint id_giaodichmuaban_lua;
        address nongdan;
    }

    mapping (address => GiaoDich[]) public DanhSachGiaoDich;

    constructor() public {
        DanhSachGiaoDich[msg.sender].push(GiaoDich(1, msg.sender));
    }

    event LuuGiaoDich(address thuonglai, address nongdan, uint id_giaodich);

    function themGiaoDich(address nongdan, uint id_giaodich) public returns (bool) {
        GiaoDich memory giaodich;
        giaodich = GiaoDich(
            id_giaodich,
            nongdan
        );

        DanhSachGiaoDich[msg.sender].push(giaodich);

        emit LuuGiaoDich(msg.sender, nongdan, id_giaodich);

        return true;
    }
}