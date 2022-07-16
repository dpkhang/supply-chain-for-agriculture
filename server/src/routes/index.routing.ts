
import Nhatkydongruong from './nhatkydongruong.routing'
import Hoatdongnhatky from './hoatdongnhatky.routing'
import Giaodichmuaban_vattu from './giaodichmuaban_vattu.routing'
import Giaodichmuaban_lua from './giaodichmuaban_lua.routing'
import VatTuSuDung from './vattusudung.routing'

const DEFAULT_URL = '/api/v1/blockchain'

const createRouter = (app: any) => {
    app.use(DEFAULT_URL + '/rice-transaction'       , Giaodichmuaban_lua)

    app.use(DEFAULT_URL+  '/field-log'              , Nhatkydongruong)

    app.use(DEFAULT_URL + '/activity-log'           , Hoatdongnhatky)

    app.use(DEFAULT_URL + '/supplies-using'         , VatTuSuDung)
    
    app.use(DEFAULT_URL + '/supplies-transaction'   , Giaodichmuaban_vattu)

}

export default createRouter