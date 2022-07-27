
import Nhatkydongruong          from './nhatkydongruong.routing'
import Hoatdongnhatky           from './hoatdongnhatky.routing'
import Giaodichmuaban_vattu     from './giaodichmuaban_vattu.routing'
import Giaodichmuaban_lua       from './giaodichmuaban_lua.routing'
import VatTuSuDung              from './vattusudung.routing'
import GiaoDichMuaBan_GiongLua  from './giaodichmuaban_gionglua.routing'
import { AccountController }    from '../controllers/account.controller'
import { AccountValidator }     from '../middlewares/validator/Account.middlewares'
const accountController = new AccountController()

const DEFAULT_URL = '/api/v1/blockchain'

const createRouter = (app: any) => {

    app.post(DEFAULT_URL + '/account'               , AccountValidator, accountController.importRawKey)

    app.use(DEFAULT_URL + '/rice-transaction'       , Giaodichmuaban_lua)

    app.use(DEFAULT_URL+  '/field-log'              , Nhatkydongruong)

    app.use(DEFAULT_URL + '/activity-log'           , Hoatdongnhatky)

    app.use(DEFAULT_URL + '/supplies-using'         , VatTuSuDung)
    
    app.use(DEFAULT_URL + '/supplies-transaction'   , Giaodichmuaban_vattu)

    app.use(DEFAULT_URL + '/seed-rice-transaction'  , GiaoDichMuaBan_GiongLua)

}

export default createRouter