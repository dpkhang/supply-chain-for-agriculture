import express from 'express'
import { AuthenticationController } from '../controllers/authentication.controller'
const route = express.Router()

const authenticationController = new AuthenticationController()

route.post('/register'         , authenticationController.register);

route.post('/login/'           , authenticationController.authentication);

export default route