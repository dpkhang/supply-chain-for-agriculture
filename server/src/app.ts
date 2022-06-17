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


const port = process.env.PORT || 8000
const DB_host = process.env.DB_HOST || 'localhost'
const DB_port = Number(process.env.DB_PORT) || 3306
const DB_database = process.env.DB_DATABASE || 'argiculture'
const DB_user = process.env.DB_USERNAME || 'root'
//const DB_password = process.env.DB_PASSWORD || '08062000aB'

const address_nongdan = '0xc74dCf167160F9826C3dBeBF36632ACFFfF02C41'

const address_nhacungung = '0xB4d78B1e8693E05dD24B1205eaE671d7D14634C2'

const address_hopdong = '0xC2B971707c2366CD3BEbbd27540e42D91d04b7AE'

const id_hopdong = 1

const status = true

const init = async () => {
    var web3 = new Web3('http://10.32.2.150:8545/')
    const contract = await new web3.eth.Contract(giaodichmuaban_lua.abi as any, address_hopdong);

    //get event 

    await contract.methods.themGiaoDich(address_nongdan, 11, true)
    .send({from: address_nhacungung})

    // var web3 = new Web3('http://10.233.5.226:8545/')
    // const contract = await new web3.eth.Contract(giaodichmuaban_lua.abi as any, '0x47070aa3CdbBCF8A99F7d0f994f59f44e441C018');
    // console.log(web3)
    // const sign = web3.eth.accounts.privateKeyToAccount('c8faf8666752aa2e9ea1ea6dffa3224a199909baa84750026e09f1b7db5a7918')    
    // await contract.methods.themGiaoDich('0xc6ca2375fBcC552779C95B2b35eEAdD0fcb964Fe', 11, true)
    // .send({from: '0xDFC5fC650689637b122f9C9E78D5fE495d3FeB96'})

    // const name = await contract.methods.ListGiaoDich(11).call()
    // console.log(name)
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

    // app.listen(port, () => {
    //     console.log('listening on port: ' + port)
    // })
} catch (err) {
    throw err
}