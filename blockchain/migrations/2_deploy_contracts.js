const GiaodichMuaBan_Lua = artifacts.require("GiaoDichMuaBan_Lua");
const GiaodichMuaBan_Vattu = artifacts.require("GiaoDichMuaBan_VatTu");

module.exports = function(deployer) {
  deployer.deploy(GiaodichMuaBan_Lua);
  deployer.deploy(GiaodichMuaBan_Vattu);

};
