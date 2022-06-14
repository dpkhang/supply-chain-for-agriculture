// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract GiaoDichMuaBan_VatTu {
    uint private length;

    struct Giaodich {
        uint id_giaodichmuaban_vattu;
        address nhacungcapvattu;
        address xavien;
    }


    event giaodichEvent( uint id_giaodichmuaban_vattu, address nhacungcap, address xavien );

    mapping( address => mapping(uint => Giaodich) ) public list_giaodich;

    function themGiaoDich(address nhacungcap, uint id_giaodichmuaban_vattu) public returns (bool) {
        
        Giaodich memory giaodich;
        giaodich =  Giaodich(
                        id_giaodichmuaban_vattu, 
                        nhacungcap, 
                        msg.sender
                    );
        
        emit giaodichEvent(id_giaodichmuaban_vattu, nhacungcap, msg.sender);

        list_giaodich[msg.sender][id_giaodichmuaban_vattu] = giaodich;
        
        return true;
    }

    function layDanhSachIdGiaoDich() public view returns (uint[] memory) {
        uint[] memory list_id_giaodich;
        uint index = 0;

        for(uint i = 0; i < list_giaodich[msg.sender].length; i++) {
            list_id_giaodich[index] = list_giaodich[msg.sender][i].id_giaodichmuaban_vattu;
            index++;
        }

        return list_id_giaodich;
    }

}