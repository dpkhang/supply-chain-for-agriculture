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
const DB_password = process.env.DB_PASSWORD || '08062000aB'


const init = async () => {
    var web3 = new Web3('http://localhost:9545')
    var contract = await new web3.eth.Contract(giaodichmuaban_vattu.abi as any, '0x8a0Faf2f089Fb7200DEA6aab13c86DDE3374Fe07')
    await contract.methods.themGiaoDich(1, '0x592dbf14c88466b62dd6c111990a22adf6aecdc2').send({from: '0x33777f49939a0592e41ae8c5ea403acfb9900977'})
    var name = await contract.methods.danhsach_giaodich('0x592dbf14c88466b62dd6c111990a22adf6aecdc2' , 0).call()

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
    // createConnection(DB_host, DB_port, DB_database, DB_user, DB_password)

    // app.listen(port, () => {
    //     console.log('listening on port: ' + port)
    // })
} catch (err) {
    throw err
}