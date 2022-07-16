const Web3 = require("web3");
const Coin = require('../abis/NhatKyDongRuong.json');

const init = async () => {
    //truyen dia chi blockchain
    const web3 = new Web3('http://127.0.0.1:8545/');
    const contract = await new web3.eth.Contract(Coin.abi, '0x86A4C14a007edA3fCF9E4A70178e787C9c6286bf');
    //const name = await contract.methods.name().call();
    //const symbol = await contract.methods.symbol().call();
    //const decimal = await contract.methods.decimals().call();
    // await contract.methods.ThemNhatKyDongRuong(
    //     1,
    //     100,
    //     3,
    //     4,
    //     12072022
    // ).send({ 
    //     from: '0xee877d1F9Ad7b9609b4DFDa4CED2c60205D12be5' 
    //     ,gas: 3000000
    // }); //4
    //const giaoDich = await contract.methods.DanhSachNhatKyDongRuong(100).call();
    // await contract.methods.transfer('0x8a3de6ca5d60b83e788e9d5747dabb7d040073e1', 10000)
    // .send({from: '0xbee2a0ebcb8a167832dc26eda166c3aeb2459e09'});
    //const balance = await contract.methods.balanceOf('0xbee2a0ebcb8a167832dc26eda166c3aeb2459e09').call();
    //const receiverBalance = await contract.methods.balanceOf('0x8a3de6ca5d60b83e788e9d5747dabb7d040073e1').call();
    //const giaoDich = await contract.methods.ListGiaoDich(3).call();
    const giaoDich = await contract.getPastEvents("SuKienThemNhatKyDongRuong", {fromBlock: "earliest"})
    console.log(giaoDich)

    //console.log(name, symbol, decimal, initBalance, balance, receiverBalance);
}

init();