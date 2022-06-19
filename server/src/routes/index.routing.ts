import XavienRouting from './xavien.routing'
import ThuonglaiRouting from './thuonglai.routing'
import Nhacungcapvattu from './nhacungcapvattu.routing'
import Nhatkydongruong from './nhatkydongruong.routing'
import Hoatdongnhatky from './hoatdongnhatky.routing'
import Lohangvattu from './lohang_vattu.routing'
import Giaodichmuaban_vattu from './giaodichmuaban_vattu.routing'
import Khohangvattu from './khohangvattu.routing'
import Lohang_lua from './lohang_lua.routing'
import Giaodichmuaban_lua from './giaodichmuaban_lua.routing'

const createRouter = (app: any) => {
    app.use('/api/v1/xavien', XavienRouting)

    app.use('/api/v1/thuonglai', ThuonglaiRouting)

    app.use('/api/v1/nhacungcapvattu', Nhacungcapvattu)

    app.use('/api/v1/nhatkydongruong', Nhatkydongruong)

    app.use('/api/v1/hoatdongnhatky', Hoatdongnhatky)

    app.use('/api/v1/lohangvattu', Lohangvattu)

    app.use('/api/v1/khohang_vattu', Khohangvattu)
    
    app.use('/api/v1/giaodichmuaban_vattu', Giaodichmuaban_vattu)

    app.use('/api/v1/lohang_lua', Lohang_lua)

    app.use('/api/v1/giaodichmuaban_lua', Giaodichmuaban_lua)
}

export default createRouter