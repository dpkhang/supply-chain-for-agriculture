interface HoatDongNhatKyDTO {
    id_NhatKyDongRuong      : number
    id_LichMuaVu            : number
    id_ThuaDat              : number
    id_XaVien               : number
    id_HoatDongMuaVu        : number
    ThoiGian                : number
    wallet_XaVien           : string
    password_Wallet         ?: string
    XaVienXacNhan           : boolean
    HopTacXaXacNhan         : boolean
}

export {
    HoatDongNhatKyDTO
}