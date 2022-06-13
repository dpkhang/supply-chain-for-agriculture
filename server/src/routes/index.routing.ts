import XavienRouting from './xavien.routing'



const createRouter = (app: any) => {
    app.use('/api/v1/xavien', XavienRouting)
}

export default createRouter