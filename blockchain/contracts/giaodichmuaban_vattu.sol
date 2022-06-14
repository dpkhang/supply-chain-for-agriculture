// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract GiaoDichMuaBan_VatTu {
    uint256 private length;

    struct Giaodich {
        uint256 id_giaodichmuaban_vattu;
        address nhacungcapvattu;
        address xavien;
    }

    event SuKienThemGiaoDich(
        uint256 id_giaodichmuaban_vattu,
        address nhacungcap,
        address xavien
    );

    mapping(uint256 => Giaodich) public list_giaodich;

    modifier kiemtraXacNhan(bool xacnhan) {
        require(xacnhan == true, "Giao dich chua duoc xac nhan.");

        _;
    }

    modifier kiemtraNhaCungCap(address nhacungcap) {
        require(
            nhacungcap != msg.sender,
            "ID nha cung cap phai khac ID nong dan"
        );

        _;
    }

    function themGiaoDich(
        address nhacungcap,
        uint256 id_giaodichmuaban_vattu,
        bool xacnhan
    )
        public
        kiemtraXacNhan(xacnhan)
        kiemtraNhaCungCap(nhacungcap)
        returns (bool)
    {
        Giaodich memory giaodich;

        giaodich = Giaodich(
            id_giaodichmuaban_vattu, 
            nhacungcap, 
            msg.sender
        );

        emit SuKienThemGiaoDich(
            id_giaodichmuaban_vattu, 
            nhacungcap, 
            msg.sender
        );

        list_giaodich[id_giaodichmuaban_vattu] = giaodich;

        return true;
    }
}
