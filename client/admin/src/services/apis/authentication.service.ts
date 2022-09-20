import { LoginDTO, RegisterDTO } from '../../dtos/response/authentication.dto'
import getAPI from "./base/base.api"

class AuthenticationService {
    private BASE_URL = '/auth'

    async login(data: any) {
        return await getAPI<LoginDTO>('POST', this.BASE_URL + '/login', data)
    }

    async register() {
        return await getAPI<RegisterDTO>('POST', this.BASE_URL + '/register')
    }
}

export default new AuthenticationService()