import mysql from 'mysql2'

const createConnection = (host: string, port: number, database: string, user: string, password: string) => {
    const connection = mysql.createConnection({
        host,
        port,
        database,
        user,
        password
    }) 

    connection.connect((err)=> {
        if(err) throw err
        console.log("Connection established.")
    })
}

export { createConnection }

