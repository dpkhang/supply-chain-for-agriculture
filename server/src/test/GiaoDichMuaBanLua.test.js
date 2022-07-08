const Web3 = require("web3");
const Coin = require('../abis/GiaoDichMuaBanLua.json');

const init = async () => {
    //truyen dia chi blockchain
    const web3 = new Web3('http://127.0.0.1:8545/');
    const contract = await new web3.eth.Contract(Coin.abi, '0xaB0E3c97933523F4025281fe762D53b188B7Be5F');
    //const name = await contract.methods.name().call();
    //const symbol = await contract.methods.symbol().call();
    //const decimal = await contract.methods.decimals().call();
    // await contract.methods.ThemGiaoDich(
    //     2,
    //     4,
    //     3,
    //     5,
    //     `{
    //         "ThoiGian": "27072022",
    //         "GiaLoHang": "5000"
    //     }`
    // ).send({ 
    //     from: '0x99c8afB903686e63E83D51D113E9Cd849AF319bf' 
    //     ,gas: 3000000
    // }); //4
    // const giaoDich = await contract.methods.DanhSachGiaoDich(0).call();
    // await contract.methods.transfer('0x8a3de6ca5d60b83e788e9d5747dabb7d040073e1', 10000)
    // .send({from: '0xbee2a0ebcb8a167832dc26eda166c3aeb2459e09'});
    //const balance = await contract.methods.balanceOf('0xbee2a0ebcb8a167832dc26eda166c3aeb2459e09').call();
    //const receiverBalance = await contract.methods.balanceOf('0x8a3de6ca5d60b83e788e9d5747dabb7d040073e1').call();
    // const giaoDich = await contract.methods.ListGiaoDich(0).call();
    const giaoDich = await contract.getPastEvents("SuKienGiaoDich", {fromBlock: "earliest"})
    console.log(giaoDich)

    //console.log(name, symbol, decimal, initBalance, balance, receiverBalance);
}

init();