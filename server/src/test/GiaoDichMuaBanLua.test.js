const Web3 = require("web3");
const Coin = require('../abis/GiaoDichMuaBanLua.json');

const init = async () => {
    //truyen dia chi blockchain
    const web3 = new Web3('http://127.0.0.1:8545/');
    const contract = await new web3.eth.Contract(Coin.abi, '0x83485F83E43EeaED300db92B6b4C89cF8DfE164e');
    //const name = await contract.methods.name().call();
    //const symbol = await contract.methods.symbol().call();
    //const decimal = await contract.methods.decimals().call();

    await contract.methods.ThemGiaoDich(
        [1, 2, 3, 1, 5000, 27072022],
        [true, true, true],
        ['0x00D7E729E53347D36F423bcb9114A64c9EB59759']
    ).send({ 
        from: '0xD010576020824a802b80CD19AE15e0982436d2Fb' 
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


    const giaoDich = await contract.methods.DanhSachGiaoDich(3).call();
    // await contract.methods.transfer('0x8a3de6ca5d60b83e788e9d5747dabb7d040073e1', 10000)
    // .send({from: '0xbee2a0ebcb8a167832dc26eda166c3aeb2459e09'});
    //const balance = await contract.methods.balanceOf('0xbee2a0ebcb8a167832dc26eda166c3aeb2459e09').call();
    //const receiverBalance = await contract.methods.balanceOf('0x8a3de6ca5d60b83e788e9d5747dabb7d040073e1').call();
    //const giaoDich = await contract.methods.DanhSachGiaoDich(4).call();
    // const giaoDich = await contract.getPastEvents("SuKienGiaoDich1", {fromBlock: "earliest"})
    console.log(giaoDich)

    // console.log(name, symbol, decimal, initBalance, balance, receiverBalance);
}

init();