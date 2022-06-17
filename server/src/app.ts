import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import { createConnection } from './configs/database.config'
import createRouter from './routes/index.routing'
import Web3 from 'web3'
import giaodichmuaban_lua from './abis/GiaoDichMuaBan_Lua.json'
import giaodichmuaban_vattu from './abis/GiaoDichMuaBan_VatTu.json'
const app = express()
import WalletConnectProvider from "@walletconnect/web3-provider";


const port = process.env.PORT || 8000
const DB_host = process.env.DB_HOST || 'localhost'
const DB_port = Number(process.env.DB_PORT) || 3306
const DB_database = process.env.DB_DATABASE || 'argiculture'
const DB_user = process.env.DB_USERNAME || 'root'
//const DB_password = process.env.DB_PASSWORD || '08062000aB'

const address_nongdan = '0x37a18f4D1a3094CA93d88704f35900C600753B6D'

const address_nhacungung = '0xA05b2100097FCfB559DB0C5fC8DDaaE1Ce45dbB7'

const address_hopdong = '0xC52EFA1F0F9DEa3C6265C4B3D23a163E5F2b759c'

const id_hopdong = 1

const status = true

const init = async () => {
    // var web3 = new Web3('http://127.0.0.1:8545/')

    const provider = new WalletConnectProvider({
        rpc: {
          5777: 'http://127.0.0.1:8545'
          // ...
        },
      });

    const web3 = new Web3(provider as any)
    // console.log(web3)
    // const sign = web3.eth.accounts.privateKeyToAccount('c8faf8666752aa2e9ea1ea6dffa3224a199909baa84750026e09f1b7db5a7918')
    const contract = await new web3.eth.Contract(giaodichmuaban_vattu.abi as any, address_hopdong);
      console.log(contract)
    // await contract.methods.themGiaoDich(id_hopdong, address_nhacungung, status).send({ from: address_nongdan })

    const name = await contract.methods.danhsach_giaodich(address_nongdan, 2).call()
    
}

try {

    init()

    

    // app.use(cors())
    // app.use(express.json())
    // app.use(express.urlencoded({ extended: true }))

    // //---------------route-------------//
    // createRouter(app)

    // //--------connect database---------//
    // createConnection(DB_host, DB_port, DB_database, DB_user, DB_password)

    app.listen(port, () => {
        console.log('listening on port: ' + port)
    })
} catch (err) {
    throw err
}

//  Create WalletConnect Provider

  
  //  Enable session (triggers QR Code modal)
// provider.enable();