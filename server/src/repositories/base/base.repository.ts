import { Dialect, Sequelize } from 'sequelize'

class BaseRepository {
    
    sequelize = new Sequelize(process.env.DB_DATABASE as string, process.env.DB_USER as string, process.env.DB_PASSWORD as string, {
        dialect: 'mysql'
    })

    repos

    constructor(entity: any) {
        this.repos = this.sequelize.define(entity.constructor.name, 
                                            { ...entity },  
                                            { createdAt: false, updatedAt: false}
                                          )
        this.repos.sync()
    }

    findAll =async () => {
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