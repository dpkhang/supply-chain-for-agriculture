const Web3 = require("web3");
const Coin = require('../abis/GiaoDichMuaBanVatTu.json');

const init = async () => {
    //truyen dia chi blockchain
    const web3 = new Web3('http://127.0.0.1:8545/');
    const contract = await new web3.eth.Contract(Coin.abi, '0xDE274A04AbeB584d0fb7d4b33C5Db1Fd198AaF33');
    //const name = await contract.methods.name().call();
    //const symbol = await contract.methods.symbol().call();
    //const decimal = await contract.methods.decimals().call();
    await contract.methods.ThemGiaoDich(
      [1, 2, 6, 1, 4, 5],
      [true, true, true],
<<<<<<< HEAD
      ['0xccF33e4E7e2e4bAbc3ea998B314E96ed3c78F8CC']
    ).send({ 
        from: '0xee877d1F9Ad7b9609b4DFDa4CED2c60205D12be5' 
=======
      ['0xc16dde9257dC687Bd7f5Ff52C32F1C9688CC5A04']
    ).send({ 
        from: '0x67b336900a22331304594B6f09f66191E775877e' 
>>>>>>> e843c08046ec7f3f2c489ab213b2591638b34eb1
        ,gas: 3000000
    }); //4
    const giaoDich = await contract.methods.DanhSachGiaoDich(6).call();
    // await contract.methods.transfer('0x8a3de6ca5d60b83e788e9d5747dabb7d040073e1', 10000)
    // .send({from: '0xbee2a0ebcb8a167832dc26eda166c3aeb2459e09'});
    //const balance = await contract.methods.balanceOf('0xbee2a0ebcb8a167832dc26eda166c3aeb2459e09').call();
    //const receiverBalance = await contract.methods.balanceOf('0x8a3de6ca5d60b83e788e9d5747dabb7d040073e1').call();
    //const giaoDich = await contract.methods.ListGiaoDich(3).call();
    console.log(giaoDich)

    //console.log(name, symbol, decimal, initBalance, balance, receiverBalance);
}

init();