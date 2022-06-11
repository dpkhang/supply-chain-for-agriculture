import express from 'express'
import cors from 'cors'
const app = express()

const port = process.env.PORT || 8000

try {
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    app.listen(port, ()=> {
        console.log('listening on port: ' + port)
    })
}catch(err) {
    throw err
}