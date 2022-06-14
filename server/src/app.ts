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
const DB_password = process.env.DB_PASSWORD || '08062000aB'


const init = async () => {
    var web3 = new Web3('http://localhost:9545')
    const contract = await new web3.eth.Contract(giaodichmuaban_lua.abi as any, '0x00dbe6Ee1dD36299F514a9673Ce2537AC9e32352');
    await contract.methods.themGiaoDich('0x592dbf14c88466b62dd6c111990a22adf6aecdc2', 1)
    .send({from: '0x33777f49939a0592e41ae8c5ea403acfb9900977'})
   // const name = await contract.methods.ListGiaoDich(1).call()

   // console.log(name)
}

try {

    init()

    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    //---------------route-------------//
    createRouter(app)

    //--------connect database---------//
    createConnection(DB_host, DB_port, DB_database, DB_user, DB_password)

    app.listen(port, () => {
        console.log('listening on port: ' + port)
    })
} catch (err) {
    throw err
}