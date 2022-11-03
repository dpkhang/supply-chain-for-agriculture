export interface GiaoDichMuaBanSanPhamDTO {
  id_NguoiBan: number;
  id_NguoiTieuDung: number;
  id_GiaoDich: number;
  id_LoHangSanPham: number;
  giaLoHang: number;
  thoigianGiaoDich: number;
  xacNhanNguoiBan: boolean;
  xacNhanNguoiTieuDung: boolean;
  xacNhanHTX?: boolean;
  loaiLoHang: boolean;
  wallet_NguoiTao?: string;
  id_giaoDichMuaBanLua: number;
  soluong: number;
  thoigianLoHang: number;
  password?: string;
}
