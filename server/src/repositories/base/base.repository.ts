import { Dialect, Sequelize } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()


class BaseRepository {
    
    sequelize = new Sequelize(process.env.DB_DATABASE as string, process.env.DB_USERNAME as string, process.env.DB_PASSWORD as string, {
        host: process.env.DB_HOST as string,
        port: parseInt(process.env.DB_PORT || '3306'),
        dialect: 'mysql',
        define: {
            freezeTableName: true
        }
    })

    repos

    constructor(entity: any) {
        this.repos = this.sequelize.define(entity.constructor.name, 
                                            { ...entity },  
                                            { createdAt: false, updatedAt: false, initialAutoIncrement: '10000'}
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
        return this.repos.create({...data}).then(t=>t)
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