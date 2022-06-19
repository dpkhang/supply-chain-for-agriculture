import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import { createConnection } from './configs/database.config'
import createRouter from './routes/index.routing'
const app = express()

const port = process.env.PORT || 8000
const DB_host = process.env.DB_HOST || 'localhost'
const DB_port = Number(process.env.DB_PORT) || 3306
const DB_database = process.env.DB_DATABASE || 'argiculture'
const DB_user = process.env.DB_USERNAME || 'root'
const DB_password = process.env.DB_PASSWORD || ''

try {
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