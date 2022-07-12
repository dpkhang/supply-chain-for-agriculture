const Web3 = require("web3");
const Coin = require('../abis/LoHangLua.json');

const init = async () => {
    //truyen dia chi blockchain
    const web3 = new Web3('http://127.0.0.1:8545/');
    const contract = await new web3.eth.Contract(Coin.abi, '0x2b2B29eE26D155bcdE82AafEfd301a8d89d57839');
    //const name = await contract.methods.name().call();
    //const symbol = await contract.methods.symbol().call();
    //const decimal = await contract.methods.decimals().call();
    await contract.methods.ThemLoHangLua(
        [2, 1, 1, 2, 400, 27072022, 20, 20],
        ['0x409a14119DE06fdba12638d17310934784Bce90c'],
        ['Nang Thom']
    ).send({ 
        from: '0x1b7A176215B7595DaAa81eDB8E4Ac7fA526E72de' 
        ,gas: 3000000
    }); //4
    const giaoDich = await contract.methods.DanhSachLoHangLua(1).call();
    // await contract.methods.transfer('0x8a3de6ca5d60b83e788e9d5747dabb7d040073e1', 10000)
    // .send({from: '0xbee2a0ebcb8a167832dc26eda166c3aeb2459e09'});
    //const balance = await contract.methods.balanceOf('0xbee2a0ebcb8a167832dc26eda166c3aeb2459e09').call();
    //const receiverBalance = await contract.methods.balanceOf('0x8a3de6ca5d60b83e788e9d5747dabb7d040073e1').call();
    //const giaoDich = await contract.methods.ListGiaoDich(3).call();
    console.log(giaoDich)

    //console.log(name, symbol, decimal, initBalance, balance, receiverBalance);
}

init();