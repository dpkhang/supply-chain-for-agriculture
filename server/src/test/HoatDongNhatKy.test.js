const Web3 = require("web3");
const Coin = require('../abis/HoatDongNhatKy.json');

const init = async () => {
    //truyen dia chi blockchain
    const web3 = new Web3('http://127.0.0.1:8545/');
    const contract = await new web3.eth.Contract(Coin.abi, '0x67e2ceC8734345FB8742D6f0a554b8F205Ab1ea3');
    //const name = await contract.methods.name().call();
    //const symbol = await contract.methods.symbol().call();
    //const decimal = await contract.methods.decimals().call();
    // await contract.methods.ThemHoatDongNhatKy(
    //     2,
    //     4,
    //     2,
    //     '0x9Ce8480d35b4F29564F0613022fcD743de89efa7'
    // ).send({ 
    //     from: '0x0fa10a122cE614b230264f4473e5F7ba03C97673' 
    //     ,gas: 3000000
    // }); //4
    const giaoDich = await contract.methods.DanhSachHoatDongNhatKy(1).call();
    // await contract.methods.transfer('0x8a3de6ca5d60b83e788e9d5747dabb7d040073e1', 10000)
    // .send({from: '0xbee2a0ebcb8a167832dc26eda166c3aeb2459e09'});
    //const balance = await contract.methods.balanceOf('0xbee2a0ebcb8a167832dc26eda166c3aeb2459e09').call();
    //const receiverBalance = await contract.methods.balanceOf('0x8a3de6ca5d60b83e788e9d5747dabb7d040073e1').call();
    //const giaoDich = await contract.ThemHoatDongNhatKy(id_contract)?.call()
    console.log(giaoDich)

    //console.log(name, symbol, decimal, initBalance, balance, receiverBalance);
}

init();