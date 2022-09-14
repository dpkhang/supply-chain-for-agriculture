// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;

import "./LoHangLua.sol";
import "./LoHangSanPham.sol";

contract GiaoDichMuaBanSanPham {
    /**
        loaiLoHang = 0 //Lo hang lua
        loaiLoHang = 1 //Lo hang vat tu
     */
    struct GiaoDichMuaBanSanPham_Struct {
        uint id_GiaoDich;
        uint id_NguoiTieuDung;
        uint id_NguoiBan;
        uint id_LoHang;
        bool LoaiLoHang;
        uint GiaLoHang;
        uint ThoiGianGiaoDich;
    }

    mapping(uint => GiaoDichMuaBanSanPham_Struct) public DanhSachGiaoDich;

    mapping(uint => uint) public DanhSachIdGiaoDich;

    uint public maxLength = 0;

    event SuKienThemGiaoDich(
        uint id_GiaoDich,
        uint id_NguoiTieuDung,
        uint id_NguoiBan,
        uint id_LoHang,
        bool LoaiLoHang,
        uint GiaLoHang,
        uint ThoiGianGiaoDich
    );

    modifier KiemTraIdCacBenQuan(
        uint id_NguoiTieuDung,
        uint id_NguoiBan
    ) {
        require(id_NguoiTieuDung != id_NguoiBan, "Id nguoi tieu dung va nguoi ban khong the trung nhau");
        _;
    }

    modifier KiemTraXacNhan ( bool[] memory boolProperties, bool loaiLoHang ) {
        require(
            (boolProperties[0] && boolProperties[1] && boolProperties[2]) || (boolProperties[0] && boolProperties[1] && loaiLoHang),
            "Giao dich chua dong thuan"
        );

        _;
    }

    modifier KiemTraGiaoDich ( uint id_GiaoDich ) {
        require( 
            DanhSachGiaoDich[ id_GiaoDich ].id_GiaoDich == 0,
            "ID giao dich da ton tai"
        );
        
        _;
    }

    modifier KiemTraLoHangDaTonTai( uint id_LoHang, address addr, bool loaiLoHang ) {
        LoHangLua _loHangLua = LoHangLua(addr);
        LoHangSanPham _loHangSanPham = LoHangSanPham(addr);
        if(loaiLoHang)
            require(
                _loHangSanPham.LayThongTinSanPham(id_LoHang).id_LoHangSanPham == id_LoHang,
                "Lo hang san pham chua ton tai"
            );
        else
            require(
                _loHangLua.LayThongTinLoHangLua( id_LoHang ).id_LoHangLua == id_LoHang,
                "Lo hang lua chua ton tai"
            );
        _;
    }

    modifier KiemTraLoHangDaGiaoDich( uint id_LoHang ) {
        uint index = 0;
        bool kiemTraLoHang = true;

        for ( index; index < maxLength; index ++ ) {
            uint id_GiaoDichTemp = DanhSachIdGiaoDich[ index ];

            if ( DanhSachGiaoDich[ id_GiaoDichTemp ].id_LoHang == id_LoHang ) {
                kiemTraLoHang = false;
            }
        }

        require(
            kiemTraLoHang,
            "Lo hang lua nay da duoc giao dich"
        );

        _;
    }

    /**
        intProperties [
            0: id_GiaoDich,
            1: id_NguoiTieuDung,
            2: id_NguoiBan,
            3: id_LoHang,
            4: GiaLoHang,
            5: ThoiGianGiaoDich
        ]

        boolProperties [
            0: id_NguoiTieuDung,
            1: id_XaVien
            2: id_HTX
        ]
     */

    function LuuThongTinGiaoDich(
        uint[] memory intProperties,
        bool loaiLoHang
    )
    internal
    returns (bool) {
        GiaoDichMuaBanSanPham_Struct memory GiaoDich;
        uint id_GiaoDich = intProperties[0];
        uint id_NguoiTieuDung = intProperties[1];
        uint id_NguoiBan = intProperties[2];
        uint id_LoHang = intProperties[3];
        bool LoaiLoHang = loaiLoHang;
        uint GiaLoHang = intProperties[4];
        uint ThoiGianGiaoDich = intProperties[5];

        GiaoDich = GiaoDichMuaBanSanPham_Struct(
            id_GiaoDich,
            id_NguoiTieuDung,
            id_NguoiBan,
            id_LoHang,
            LoaiLoHang,
            GiaLoHang,
            ThoiGianGiaoDich
        );

        DanhSachGiaoDich[ id_GiaoDich ] = GiaoDich;

        DanhSachIdGiaoDich[ maxLength ] = intProperties[2];
        maxLength = maxLength + 1;

        emit SuKienThemGiaoDich(id_GiaoDich, id_NguoiTieuDung, id_NguoiBan, id_LoHang, LoaiLoHang, GiaLoHang, ThoiGianGiaoDich);
        return true;
    }

    function ThemGiaoDich(
        uint[] memory intProperties,
        bool[] memory boolProperties,
        address[]   memory addressProperties,
        bool loaiLoHang
    )
    KiemTraIdCacBenQuan(intProperties[1], intProperties[2])
    KiemTraXacNhan(boolProperties, loaiLoHang)
    KiemTraGiaoDich(intProperties[0])
    KiemTraLoHangDaTonTai(intProperties[0], addressProperties[0], loaiLoHang)
    KiemTraLoHangDaGiaoDich(intProperties[0])
    public
    returns (bool) {
        bool result = LuuThongTinGiaoDich(intProperties, loaiLoHang);
        return result;
    }
}