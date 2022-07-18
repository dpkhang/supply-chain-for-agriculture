const Web3 = require("web3");
const Coin = require('../abis/NhatKyDongRuong.json');

const init = async () => {
    //truyen dia chi blockchain
    const web3 = new Web3('http://127.0.0.1:8085/');

    //const contract = await new web3.eth.Contract(Coin.abi, '0x36AbC6c8DfE6F99A46ca3Ea51e18A05A70c67944');
    //const name = await contract.methods.name().call();
    //const symbol = await contract.methods.symbol().call();
    //const decimal = await contract.methods.decimals().call();
    // await contract.methods.ThemNhatKyDongRuong(
    //     1,
    //     2,
    //     3,
    //     4,
    //     12072022
    // ).send({ 
    //     from: '0x8d5e01693507f919bde469e6f44211031e014d05' 
    //     ,gas: 3000000
    // }); //4
    //const giaoDich = await contract.methods.DanhSachNhatKyDongRuong(2).call();
    // await contract.methods.transfer('0x8a3de6ca5d60b83e788e9d5747dabb7d040073e1', 10000)
    // .send({from: '0xbee2a0ebcb8a167832dc26eda166c3aeb2459e09'});
    //const balance = await contract.methods.balanceOf('0xbee2a0ebcb8a167832dc26eda166c3aeb2459e09').call();
    //const receiverBalance = await contract.methods.balanceOf('0x8a3de6ca5d60b83e788e9d5747dabb7d040073e1').call();
    //const giaoDich = await contract.methods.ListGiaoDich(3).call();
    // const giaoDich = await contract.getPastEvents("SuKienThemNhatKyDongRuong", {fromBlock: "earliest"})
    // console.log(giaoDich)

    //console.log(name, symbol, decimal, initBalance, balance, receiverBalance);
}

init();