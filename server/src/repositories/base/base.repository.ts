import { Dialect, Sequelize } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

// #database
// DB_DATABASE=agriculture
// DB_USERNAME=root
// DB_HOST=localhost
// DB_PASSWORD=
// DB_PORT=3306

// #authentication
// SECRET_KEY=32ruhadjnsci34yr8oue823hury783iuhrsdj

class BaseRepository {
    
    sequelize = new Sequelize(process.env.DB_DATABASE as string, process.env.DB_USERNAME as string, process.env.DB_PASSWORD as string, {
        dialect: 'mysql',
        define: {
            freezeTableName: true
        }
    })

    repos

    constructor(entity: any) {
        this.repos = this.sequelize.define(entity.constructor.name, 
                                            { ...entity },  
                                            { createdAt: false, updatedAt: false}
                                          )
        this.repos.sync()
    }

    findAll = async () => {
        return this.repos.findAll()
    }

    findById = async (id: number) => {
        return this.repos.findOne({
            where: { 
                id: id,
            },
        }).then(t=>t?.get())
    }

    create = async (data: object) => {
        return this.repos.create({...data}).then(t=>t?.get())
    } 

    update = async (id: number, data: object) => {
        return this.repos.update({ ...data }, {
            where: {
                id: id
            }
        })
    }

    remove = async (data: object) => {
        return this.repos.destroy({
            where: {
                ...data
            }
        })
    }
}

export { BaseRepository }