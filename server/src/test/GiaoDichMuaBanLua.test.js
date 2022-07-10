const Web3 = require("web3");
const Coin = require('../abis/GiaoDichMuaBanLua.json');

const init = async () => {
    //truyen dia chi blockchain
    const web3 = new Web3('http://127.0.0.1:8545/');
    const contract = await new web3.eth.Contract(Coin.abi, '0x82701BF592D96d6284C324856E6b3Fa4B6C767e5');
    //const name = await contract.methods.name().call();
    //const symbol = await contract.methods.symbol().call();
    //const decimal = await contract.methods.decimals().call();

    await contract.methods.ThemGiaoDich(
        [1, 2, 3, 4, 5, 5000, 20000, 2, 1],
        ['Giong lua nao do'],
        [true, true, true]
    ).send({ 
        from: '0xb60B94b3D4FA7635be898511910Ec12e082Bd236' 
        ,gas: 3000000
    }); //4

    // await contract.methods.TestArray(
    //   ['1', '2', '3', '4']
    // ).send({ 
    //     from: '0xb60B94b3D4FA7635be898511910Ec12e082Bd236' 
    //     ,gas: 3000000
    // }); //4

    // const giaoDich = await contract.methods.testArray(2).call();
    // console.log( giaoDich );


    // const giaoDich = await contract.methods.DanhSachGiaoDich(0).call();
    // await contract.methods.transfer('0x8a3de6ca5d60b83e788e9d5747dabb7d040073e1', 10000)
    // .send({from: '0xbee2a0ebcb8a167832dc26eda166c3aeb2459e09'});
    //const balance = await contract.methods.balanceOf('0xbee2a0ebcb8a167832dc26eda166c3aeb2459e09').call();
    //const receiverBalance = await contract.methods.balanceOf('0x8a3de6ca5d60b83e788e9d5747dabb7d040073e1').call();
    //const giaoDich = await contract.methods.DanhSachGiaoDich(4).call();
    const giaoDich = await contract.getPastEvents("SuKienGiaoDich1", {fromBlock: "earliest"})
    console.log(giaoDich)

    // console.log(name, symbol, decimal, initBalance, balance, receiverBalance);
}

init();