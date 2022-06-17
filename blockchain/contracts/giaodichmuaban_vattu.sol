// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;

contract GiaoDichMuaBan_VatTu {

    struct GiaoDich {
        uint id_giaodichmuaban_vattu;
        address nhacungcapvattu;
    }

    mapping(address => mapping(uint => GiaoDich)) public danhsach_giaodich;

    constructor() public {
        danhsach_giaodich[msg.sender][0] = GiaoDich(0, msg.sender);
    }

    event sukienLuuGiaoDich(
        uint id_giaodichmuaban_vattu,
        address nhacungcapvattu,
        address nongdan
    );

    modifier kiemtraXacNhan(bool xacnhan) {
        require(
                xacnhan == true,
                'Giao dich chua duoc xac nhan.'
                );  
        _;
    }

    function themGiaoDich(
        uint id_giaodichmuaban_vattu,
        address nhacungcap,
        bool xacnhan
    ) public 
    kiemtraXacNhan(xacnhan)
    returns(bool) {

        GiaoDich memory giaodich;
        giaodich = GiaoDich(id_giaodichmuaban_vattu, nhacungcap);

        danhsach_giaodich[msg.sender][id_giaodichmuaban_vattu] = giaodich;

        emit sukienLuuGiaoDich(
                                id_giaodichmuaban_vattu, 
                                nhacungcap, 
                                msg.sender
                            );
        return true;
    }
}
