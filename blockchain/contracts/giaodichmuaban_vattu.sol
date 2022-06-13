// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract GiaoDichMuaBan_VatTu {

    struct Giaodich {
        uint id_giaodichmuaban_vattu;
        address nhacungcapvattu;
        address xavien;
    }

    event giaodichEvent( uint id_giaodichmuaban_vattu, address nhacungcap, address xavien );

    mapping( uint => Giaodich ) public list_giaodich;

    function themGiaoDich(address nhacungcap, uint id_giaodichmuaban_vattu) public returns (bool) {
        
        Giaodich memory giaodich;
        giaodich =  Giaodich(
                        id_giaodichmuaban_vattu, 
                        nhacungcap, 
                        msg.sender
                    );
        
        emit giaodichEvent(id_giaodichmuaban_vattu, nhacungcap, msg.sender);

        list_giaodich[id_giaodichmuaban_vattu] = giaodich;
        
        return true;
    }

    function layDanhSachGiaoDich() public returns (Giaodich[] memory list_giaodich) {

        

        return list_giaodich;
    }

}