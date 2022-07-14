import Web3                    from "web3"
import { Contract }            from "web3-eth-contract"
const URL_BlockChain_NetWork = process.env.URL_BlockChain_NetWork  || "127.0.0.1"
const PORT_BLOCKCHAIN        = process.env.PORT_BLOCKCHAIN || 8545

export class BaseContract {
    web3: Web3
    contract: Contract
    methods: any

    constructor(ABI: any, address: string) {
        this.web3 = new Web3(`http://${URL_BlockChain_NetWork}:${PORT_BLOCKCHAIN}`)
        this.contract = new this.web3.eth.Contract(ABI.abi, address)
        this.methods = this.contract.methods
    }

    getContracts = async (eventName: string) => {
        return await this.contract.getPastEvents(eventName, {
            fromBlock: 'earliest',
            toBlock: 'latest'
        })
    }
}