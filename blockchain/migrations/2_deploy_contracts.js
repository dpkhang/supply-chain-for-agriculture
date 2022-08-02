const GiaoDichMuaBanLua       = artifacts.require("GiaoDichMuaBanLua");
const LoHangLua               = artifacts.require("LoHangLua");
const NhatKyDongRuong         = artifacts.require("NhatKyDongRuong");
const HoatDongNhatKy          = artifacts.require("HoatDongNhatKy");
const GiaoDichMuaBanVatTu     = artifacts.require("GiaoDichMuaBanVatTu");
const LoHangVatTu             = artifacts.require("LoHangVatTu");
const VatTuSuDung             = artifacts.require("VatTuSuDung");
const GiaoDichMuaBanLuaGiong  = artifacts.require("GiaoDichMuaBanLuaGiong");

module.exports = function( deployer ) {

  deployer.deploy( GiaoDichMuaBanLua );

  deployer.deploy( LoHangLua );

  deployer.deploy( NhatKyDongRuong );

  deployer.deploy( HoatDongNhatKy );

  deployer.deploy( GiaoDichMuaBanVatTu );

  deployer.deploy( LoHangVatTu );

  deployer.deploy( VatTuSuDung );

  deployer.deploy( GiaoDichMuaBanLuaGiong );

};