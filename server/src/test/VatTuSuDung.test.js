const Web3 = require("web3");
const Coin = require('../abis/VatTuSuDung.json');

const init = async () => {
    //truyen dia chi blockchain
    const web3 = new Web3('http://127.0.0.1:8545/');
    const contract = await new web3.eth.Contract(Coin.abi, '0x0d9fb474426c096c952de772f2E876028F8c4bbA');
    //const name = await contract.methods.name().call();
    //const symbol = await contract.methods.symbol().call();
    //const decimal = await contract.methods.decimals().call();
    await contract.methods.ThemVatTuNongNghiep(
        2,
        4,
        3,
        20000,
        `{
            "ThoiGian": "27072022",
            "TenVatTu": "HCL"
        }`
    ).send({ 
        from: '0xc167cADAEEFe2C3a00037394b8Da1Ff57E0e2632' 
        ,gas: 3000000
    }); //4
    const giaoDich = await contract.methods.DanhSachVatTuSuDung(0).call();
    // await contract.methods.transfer('0x8a3de6ca5d60b83e788e9d5747dabb7d040073e1', 10000)
    // .send({from: '0xbee2a0ebcb8a167832dc26eda166c3aeb2459e09'});
    //const balance = await contract.methods.balanceOf('0xbee2a0ebcb8a167832dc26eda166c3aeb2459e09').call();
    //const receiverBalance = await contract.methods.balanceOf('0x8a3de6ca5d60b83e788e9d5747dabb7d040073e1').call();
    //const giaoDich = await contract.methods.ListGiaoDich(3).call();
    console.log(giaoDich)

    //console.log(name, symbol, decimal, initBalance, balance, receiverBalance);
}

init();