import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import { createConnection } from './configs/database.config'
import createRouter from './routes/index.routing'
import Web3 from 'web3'
import giaodichmuaban_lua from './abis/GiaoDichMuaBan_Lua.json'
const app = express()

const port = process.env.PORT || 8000
const DB_host = process.env.DB_HOST || 'localhost'
const DB_port = Number(process.env.DB_PORT) || 3306
const DB_database = process.env.DB_DATABASE || 'argiculture'
const DB_user = process.env.DB_USERNAME || 'root'
//const DB_password = process.env.DB_PASSWORD || '08062000aB'


const init = async () => {
    var web3 = new Web3('http://10.32.2.150:8545/')
    const contract = await new web3.eth.Contract(giaodichmuaban_lua.abi as any, '0xA53482667a2DA872FECF8d708Cc509Ae29C4263a');

    // const name1 = await contract.methods.ListGiaoDich(1).call()
    // console.log(name1)

    await contract.methods.themGiaoDich('0x2915Dd2e3E25023F9496724AeC9a26a4EF141900', 11, true)
    .send({from: '0xE07d0Ababc0b017640a75F5558703F469c97e595'})

    const name = await contract.methods.ListGiaoDich(11).call()
    console.log(name)
}

try {

    init()

    // app.use(cors())
    // app.use(express.json())
    // app.use(express.urlencoded({ extended: true }))

    // //---------------route-------------//
    // createRouter(app)

    // //--------connect database---------//
    // //createConnection(DB_host, DB_port, DB_database, DB_user, DB_password)
    // createConnection(DB_host, DB_port, DB_database, DB_user, "")

    // app.listen(port, () => {
    //     console.log('listening on port: ' + port)
    // })
} catch (err) {
    throw err
}