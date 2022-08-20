interface VatTuSuDungDTO {
    id_VatTuSuDung      : number
    id_HoatDongNhatKy   : number
    id_VatTu            : number
    id_LoHangVatTu      : number
    ThoiGianVatTu       : number
    TenVatTu            : string,
    Wallet_XaVien       : string,
    password_Wallet     ?: string
}

export {
    VatTuSuDungDTO
}