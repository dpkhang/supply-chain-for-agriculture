import { UserDTO } from './../../dtos/response/user.dto'
import getAPI from "./base/base.api"

class UserService {
    private BASE_URL = '/user'

    async getAll() {
        return await getAPI<UserDTO>('GET', this.BASE_URL + '/')
    }

    async getById(id: number) {
        return await getAPI<UserDTO>('GET', `${this.BASE_URL}/${id}` )
    }

    async getMe() {
        return await getAPI<UserDTO>('GET', `${this.BASE_URL}/me` )
    }
}

export default new UserService()