import { NhacungcapvattuRepository } from "../repositories/nhacungcapvattu.repository";
import { ThuonglaiRepository } from "../repositories/thuonglai.repository";
import { UserRepository } from "../repositories/user.repository";
import { XavienRepository } from "../repositories/xavien.repository";
import { BaseService } from "./base/base.service";
const bcrypt = require("bcrypt");

export class UserService extends BaseService {
    private _userService
    private _xaVienRepository;
    private _thuongLaiRepository;
    private _nhaCungCapVatTuRepository;

    constructor() {
        const _userRepository = new UserRepository();
        super(_userRepository);
        this._userService = _userRepository;
        
        this._xaVienRepository = new XavienRepository();
        this._thuongLaiRepository = new ThuonglaiRepository();
        this._nhaCungCapVatTuRepository = new NhacungcapvattuRepository();
    }

    login = async (username: string, password: string) => {
        const userInfo = await this._userService.findUserByUserName(username);
        if (!userInfo) {
            return false;
        }
        if ((await bcrypt.compare(password, userInfo.password))) {
            return true;
        }

        return false;
    }

    findUserDetailsbyUserName = async (username: string) => {
        const userInfo = await this._userService.findUserByUserName(username);
        if (!userInfo) return undefined;
        const xaVienInfo = await this._xaVienRepository.findByIdUser(userInfo.id_user);
        if (xaVienInfo) {
            return {
                ...userInfo,
                ...xaVienInfo,
                userType: 'xa-vien'
            }
        } 

        const thuongLaiInfo = await this._thuongLaiRepository.findByIdUser(userInfo.id_user);
        if (thuongLaiInfo) {
            return {
                ...userInfo,
                ...thuongLaiInfo,
                userType: 'thuong-lai'
            }
        } 

        const nhaCungCapInfo = await this._nhaCungCapVatTuRepository.findByIdUser(userInfo.id_user);
        if (nhaCungCapInfo) {
            return {
                ...userInfo,
                ...nhaCungCapInfo,
                userType: 'nha-cung-cap'
            }
        } 

        return undefined;
    }

    findByUserName = async (userName: string) => {
        return await this._userService.findUserByUserName(userName);
    }
}