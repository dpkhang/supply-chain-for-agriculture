
import Nhatkydongruong from './nhatkydongruong.routing'
import Hoatdongnhatky from './hoatdongnhatky.routing'
import Giaodichmuaban_vattu from './giaodichmuaban_vattu.routing'
import Giaodichmuaban_lua from './giaodichmuaban_lua.routing'

const DEFAULT_URL = '/api/v1/blockchain'

const createRouter = (app: any) => {
    app.use(DEFAULT_URL + '/rice-transaction', Giaodichmuaban_lua)

    app.use('/api/v1/blockchain'       , Nhatkydongruong)

    app.use('/api/v1/blockchain'        , Hoatdongnhatky)
    
    app.use('/api/v1/giaodichmuaban_vattu'  , Giaodichmuaban_vattu)

}

export default createRouter