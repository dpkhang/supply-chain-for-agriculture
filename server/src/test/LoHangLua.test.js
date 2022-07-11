const Web3 = require("web3");
const Coin = require('../abis/LoHangLua.json');

const init = async () => {
    //truyen dia chi blockchain
    const web3 = new Web3('http://127.0.0.1:8545/');
    const contract = await new web3.eth.Contract(Coin.abi, '0xB75DaA42d621a2a8B59f9C92F63BF8c67498e8A4');
    //const name = await contract.methods.name().call();
    //const symbol = await contract.methods.symbol().call();
    //const decimal = await contract.methods.decimals().call();
    await contract.methods.ThemLoHangLua(
        [2, 1, 1, 2, 400, 27072022, 20, 20],
        ['0x41aC9e29AFd84b76920B9030966c7B286CE1dBB7'],
        ['Nang Thom']
    ).send({ 
        from: '0xD010576020824a802b80CD19AE15e0982436d2Fb' 
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