export class BaseService {
    _repos
    constructor(_repos: any) {
        this._repos = _repos
    }

    findAll =async () => {
        return this._repos.findAll()
    }

    findById =  async (id: number) => {
        return this._repos.findById(id)
    }

    create = async (data: object) => {
        return this._repos.create(data)
    }

    update =async (id: number, data:object) => {
        return this._repos.update(id, data)
    }

    remove =  async (data: object) => {
        return this._repos.remove(data)
    }
}