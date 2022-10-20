const GiaoDichMuaBanLua       = artifacts.require("GiaoDichMuaBanLua");
const LoHangLua               = artifacts.require("LoHangLua");
const HoatDongNhatKy          = artifacts.require("HoatDongNhatKy");
const GiaoDichMuaBanVatTu     = artifacts.require("GiaoDichMuaBanVatTu");
const LoHangVatTu             = artifacts.require("LoHangVatTu");
const VatTuSuDung             = artifacts.require("VatTuSuDung");
const GiaoDichMuaBanLuaGiong  = artifacts.require("GiaoDichMuaBanLuaGiong");
const GiaoDichMuaBanSanPham   = artifacts.require("GiaoDichMuaBanSanPham");
const LoHangSanPham           = artifacts.require("LoHangSanPham");

module.exports = function( deployer ) {

  deployer.deploy( GiaoDichMuaBanLua );

  deployer.deploy( LoHangLua );

  deployer.deploy( HoatDongNhatKy );

  deployer.deploy( GiaoDichMuaBanVatTu );

  deployer.deploy( LoHangVatTu );

  deployer.deploy( VatTuSuDung );

  deployer.deploy( GiaoDichMuaBanLuaGiong );

  deployer.deploy( GiaoDichMuaBanSanPham );

  deployer.deploy( LoHangSanPham );
};