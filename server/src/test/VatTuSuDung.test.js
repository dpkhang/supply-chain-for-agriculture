const Web3 = require("web3");
const Coin = require('../abis/VatTuSuDung.json');

const init = async () => {
    //truyen dia chi blockchain
    const web3 = new Web3('http://127.0.0.1:8545/');
    const contract = await new web3.eth.Contract(Coin.abi, '0x16a1d1B39c26FF32148Ef2e3e7996530cdeB6400');
    //const name = await contract.methods.name().call();
    //const symbol = await contract.methods.symbol().call();
    //const decimal = await contract.methods.decimals().call();
    await contract.methods.ThemVatTuNongNghiep(
       [1, 2, 1, 1, 1],
       ['Thong tin khac'],
       ['0x507e6DDe668eDD74E11155F23E3F388Bd85B8E69']
    ).send({ 
        from: '0x718Fc9A5C24b688F7228F57D538fA78DfEF65c62' 
        ,gas: 3000000
    }); //4
    const giaoDich = await contract.methods.DanhSachVatTuSuDung(0).call();
    // await contract.methods.transfer('0x8a3de6ca5d60b83e788e9d5747dabb7d040073e1', 10000)
    // .send({from: '0xbee2a0ebcb8a167832dc26eda166c3aeb2459e09'});
    //const balance = await contract.methods.balanceOf('0xbee2a0ebcb8a167832dc26eda166c3aeb2459e09').call();
    //const receiverBalance = await contract.methods.balanceOf('0x8a3de6ca5d60b83e788e9d5747dabb7d040073e1').call();
    //const giaoDich = await contract.methods.ListGiaoDich(3).call();
    console.log(giaoDich)

    //console.log(name, symbol, decimal, initBalance, balance, receiverBalance);
}

init();