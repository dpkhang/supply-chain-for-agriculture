// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;

contract GiaoDichMuaBan_VatTu {
    struct GiaoDich {
        uint id_giaodichmuaban_vattu;
        address nhacungcapvattu;
    }

    mapping(address => GiaoDich[]) public danhsach_giaodich;

    constructor() public {
        danhsach_giaodich[msg.sender].push(GiaoDich(1, msg.sender));
    }

    event sukienLuuGiaoDich(
        uint id_giaodichmuaban_vattu,
        address nhacungcapvattu,
        address nongdan
    );

    function themGiaoDich(
        uint id_giaodichmuaban_vattu,
        address nhacungcap
    ) public returns(bool) {
        GiaoDich memory giaodich;
        giaodich = GiaoDich(id_giaodichmuaban_vattu, nhacungcap);

        danhsach_giaodich[msg.sender].push(giaodich);
        emit sukienLuuGiaoDich(id_giaodichmuaban_vattu, nhacungcap, msg.sender);
        return true;
    }
}
