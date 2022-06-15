// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;

contract nhatkydongruong {
    //----------data---------//
    struct NhatKy {
        address xavien;
        uint id_nhatkydongruong;
        uint id_hoatdongnhatky;
        uint id_phanbonthuocbaove;
    }

    mapping(address => NhatKy[]) public DanhSachNhatKy;

    //-----------data---------//
    event suKienLuuNhatKy(
        address xavien,
        uint id_nhatkydongruong,
        uint id_hoatdongnhatky,
        uint id_phanbonthuocbaove
    );

    //----modifier function---//
    modifier kiemTraXacNhan(bool xacnhan) {
        require(
            xacnhan == true, 
            "Giao dich chua duoc xac nhan."
        );

        _;
    }

    //----------handle--------//
    function themHThongTinMuaVu( 
        uint id_nhatkydongruong,
        uint id_hoatdongnhatky,
        uint id_phanbonthuocbaove,
        bool xacnhan
    ) public
     kiemTraXacNhan(xacnhan)
     returns(bool) {
        NhatKy memory nhatky;
        nhatky = NhatKy(
            msg.sender,
            id_nhatkydongruong,
            id_hoatdongnhatky,
            id_phanbonthuocbaove
        );

        DanhSachNhatKy[msg.sender].push(nhatky);

        emit suKienLuuNhatKy(
            msg.sender,
            id_nhatkydongruong,
            id_hoatdongnhatky,
            id_phanbonthuocbaove
        );

        return true;
    }
}