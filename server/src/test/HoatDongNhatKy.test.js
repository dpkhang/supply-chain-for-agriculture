const Web3 = require("web3");
const Coin = require('../abis/HoatDongNhatKy.json');

const init = async () => {
    //truyen dia chi blockchain
    const web3 = new Web3('http://127.0.0.1:8545/');
    const contract = await new web3.eth.Contract(Coin.abi, '0x27928bcd5C670EF4eB2a36a9C3Ed22dF74855921');
    //const name = await contract.methods.name().call();
    //const symbol = await contract.methods.symbol().call();
    //const decimal = await contract.methods.decimals().call();
    await contract.methods.ThemHoatDongNhatKy(
        1,
        2,
        4,
        `{
            "ThoiGian": "27072022"
        }`
    ).send({ 
        from: '0x4d827e7aa6d2B88d5a068c99D9B39461e7F4CA84' 
        ,gas: 3000000
    }); //4
    const giaoDich = await contract.methods.DanhSachHoatDongNhatKy(0).call();
    // await contract.methods.transfer('0x8a3de6ca5d60b83e788e9d5747dabb7d040073e1', 10000)
    // .send({from: '0xbee2a0ebcb8a167832dc26eda166c3aeb2459e09'});
    //const balance = await contract.methods.balanceOf('0xbee2a0ebcb8a167832dc26eda166c3aeb2459e09').call();
    //const receiverBalance = await contract.methods.balanceOf('0x8a3de6ca5d60b83e788e9d5747dabb7d040073e1').call();
    //const giaoDich = await contract.methods.ListGiaoDich(3).call();
    console.log(giaoDich)

    //console.log(name, symbol, decimal, initBalance, balance, receiverBalance);
}

init();