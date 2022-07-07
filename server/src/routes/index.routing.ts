
import Nhatkydongruong from './nhatkydongruong.routing'
import Hoatdongnhatky from './hoatdongnhatky.routing'
import Giaodichmuaban_vattu from './giaodichmuaban_vattu.routing'
import Giaodichmuaban_lua from './giaodichmuaban_lua.routing'

const createRouter = (app: any) => {

    app.use('/api/v1/nhatkydongruong'       , Nhatkydongruong)

    app.use('/api/v1/hoatdongnhatky'        , Hoatdongnhatky)
    
    app.use('/api/v1/giaodichmuaban_vattu'  , Giaodichmuaban_vattu)

    app.use('/api/v1/giaodichmuaban_lua'    , Giaodichmuaban_lua)
}

export default createRouter