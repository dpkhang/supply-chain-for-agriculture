// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract GiaoDichMuaBan_Lua {
    
    //-------------data--------------//
    struct GiaoDich {
        uint id_giaodichmuaban_lua;
        address thuonglai;
        address nongdan;
    }

    mapping(uint => GiaoDich) public ListGiaoDich;


    //---------------event------------//
    event giaoDichEvent(
        address nongdang, 
        address thuonglai, 
        uint id_giaodichmuaban_lua
    );


    //--------modifier function-------//
     modifier kiemTraXacNhan(bool xacnhan) {
        require(
            xacnhan == true, 
            "Giao dich chua duoc xac nhan."
        );

        _;
    }
    
    modifier kiemTraThuongLai(address thuonglai) {
        require(
            thuonglai != msg.sender, 
            "ID thuong lai phai khac id nong dan"
        );

        _;
    }

    //-------handle function--------//
    modifier kiemTraIdGiaoDichMuaBanLua(uint id_giaodichmuaban_lua) {
        require(
            ListGiaoDich[id_giaodichmuaban_lua]
            .id_giaodichmuaban_lua != id_giaodichmuaban_lua, 
            "id giao dich la duy nhat");

        _;
    }

    function themGiaoDich(
        address thuonglai, 
        uint id_giaodichmuaban_lua,
        bool xacnhan
    ) public 
    kiemTraXacNhan(xacnhan)
    kiemTraThuongLai(thuonglai) 
    kiemTraIdGiaoDichMuaBanLua(id_giaodichmuaban_lua) 
    returns (bool) {

        GiaoDich memory giaoDich;
        giaoDich = GiaoDich(
            id_giaodichmuaban_lua,
            thuonglai,
            msg.sender
        );

        ListGiaoDich[id_giaodichmuaban_lua] = giaoDich;

        emit giaoDichEvent(
            msg.sender, 
            thuonglai, 
            id_giaodichmuaban_lua
        );
        
        return true;
    }
}