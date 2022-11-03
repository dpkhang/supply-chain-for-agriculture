// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;

import "./LoHangLua.sol";
import "./LoHangSanPham.sol";
import "./GiaoDichMuaBanLua.sol";

contract GiaoDichMuaBanSanPham {
    /**
        loaiLoHang = 0 //Lo hang lua
        loaiLoHang = 1 //Lo hang vat tu
     */
    struct GiaoDichMuaBanSanPham_Struct {
        uint256 id_GiaoDich;
        uint256 id_NguoiTieuDung;
        uint256 id_NguoiBan;
        uint256 id_LoHang;
        bool LoaiLoHang;
        uint256 GiaLoHang;
        uint256 ThoiGianGiaoDich;
        uint256 id_GiaoDichMuaBanLua;
    }

    mapping(uint256 => GiaoDichMuaBanSanPham_Struct) public DanhSachGiaoDich;

    mapping(uint256 => uint256) public DanhSachIdGiaoDich;

    uint256 public maxLength = 0;

    event SuKienThemGiaoDich(
        uint256 id_GiaoDich,
        uint256 id_NguoiTieuDung,
        uint256 id_NguoiBan,
        uint256 id_LoHang,
        bool LoaiLoHang,
        uint256 GiaLoHang,
        uint256 ThoiGianGiaoDich,
        uint256 id_GiaoDichMuaBanLua
    );

    modifier KiemTraIdCacBenQuan(
        uint256 id_NguoiTieuDung,
        uint256 id_NguoiBan
    ) {
        require(
            id_NguoiTieuDung != id_NguoiBan,
            "Id nguoi tieu dung va nguoi ban khong the trung nhau"
        );
        _;
    }

    modifier KiemTraXacNhan(bool[] memory boolProperties, bool loaiLoHang) {
        require(
            (boolProperties[0] && boolProperties[1] && boolProperties[2]) ||
                (boolProperties[0] && boolProperties[1] && loaiLoHang),
            "Giao dich chua dong thuan"
        );

        _;
    }

    modifier KiemTraGiaTriSo(
        uint256[] memory intProperties,
        address addr,
        bool loaiLoHang
    ) {
        // kiem tra lo hang da ton tai
        LoHangLua _loHangLua = LoHangLua(addr);
        LoHangSanPham _loHangSanPham = LoHangSanPham(addr);
        if (loaiLoHang)
            require(
                _loHangSanPham.LayThongTinSanPham(intProperties[3]).id_LoHangSanPham ==
                    intProperties[3],
                "Lo hang san pham chua ton tai"
            );
        else
            require(
                _loHangLua.LayThongTinLoHangLua(intProperties[3]).id_LoHangLua ==
                    intProperties[3],
                "Lo hang lua chua ton tai"
            );

        // kiem tra lo hang da giao dich
        uint256 index = 0;
        bool kiemTraLoHang = true;

        for (index; index < maxLength; index++) {
            uint256 id_GiaoDichTemp = DanhSachIdGiaoDich[index];

            if (DanhSachGiaoDich[id_GiaoDichTemp].id_LoHang == intProperties[3]) {
                kiemTraLoHang = false;
            }
        }

        //Kiem tra giao dich mua ban lua da ton tai
        uint index2 = 0;
        bool kiemTraGiaoDichMuaBanLua = true;

        for ( index2; index2 < maxLength; index2 ++ ) {
            uint id_GiaoDichTemp = DanhSachIdGiaoDich[ index2 ];

            if ( DanhSachGiaoDich[ id_GiaoDichTemp ].id_GiaoDichMuaBanLua == intProperties[6] ) {
                kiemTraGiaoDichMuaBanLua = false;
            }
        }

         require(
            kiemTraGiaoDichMuaBanLua,
            "Giao dich mua ban lua nay da ton tai"
        );

        require(kiemTraLoHang, "Lo hang lua nay da duoc giao dich");

        // kiem tra cac ben lien quan
        require(
            intProperties[1] != intProperties[2],
            "Id nguoi tieu dung va nguoi ban khong the trung nhau"
        );

        // kiem tra giao dich
        require(
            DanhSachGiaoDich[intProperties[0]].id_GiaoDich == 0,
            "ID giao dich da ton tai"
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
            6: id_GiaoDichMuaBanLua
        ]

        boolProperties [
            0: id_NguoiTieuDung,
            1: id_XaVien
            2: id_HTX
        ]
     */

    function LuuThongTinGiaoDich(
        uint256[] memory intProperties,
        bool loaiLoHang
    ) internal returns (bool) {
        GiaoDichMuaBanSanPham_Struct memory GiaoDich;
        uint256 id_GiaoDich = intProperties[0];
        uint256 id_NguoiTieuDung = intProperties[1];
        uint256 id_NguoiBan = intProperties[2];
        uint256 id_LoHang = intProperties[3];
        bool LoaiLoHang = loaiLoHang;
        uint256 GiaLoHang = intProperties[4];
        uint256 ThoiGianGiaoDich = intProperties[5];
        uint256 id_GiaoDichMuaBanLua = intProperties[6];

        GiaoDich = GiaoDichMuaBanSanPham_Struct(
            id_GiaoDich,
            id_NguoiTieuDung,
            id_NguoiBan,
            id_LoHang,
            LoaiLoHang,
            GiaLoHang,
            ThoiGianGiaoDich,
            id_GiaoDichMuaBanLua
        );

        DanhSachGiaoDich[id_GiaoDich] = GiaoDich;

        DanhSachIdGiaoDich[maxLength] = intProperties[2];
        maxLength = maxLength + 1;

        emit SuKienThemGiaoDich(
            id_GiaoDich,
            id_NguoiTieuDung,
            id_NguoiBan,
            id_LoHang,
            LoaiLoHang,
            GiaLoHang,
            ThoiGianGiaoDich,
            id_GiaoDichMuaBanLua
        );
        return true;
    }

    function ThemGiaoDich(
        uint256[] memory intProperties,
        bool[] memory boolProperties,
        address[] memory addressProperties,
        bool loaiLoHang
    )
        public
        KiemTraXacNhan(boolProperties, loaiLoHang)
        KiemTraGiaTriSo(
            intProperties,
            addressProperties[0],
            loaiLoHang
        )
        returns (bool)
    {
        return LuuThongTinGiaoDich(intProperties, loaiLoHang);
    }
}
