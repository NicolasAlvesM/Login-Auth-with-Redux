import {Router} from 'express'
import CompanyController from './controllers/CompanyController'
import UserController from './controllers/UserController'
import authMiddleware from './middlewares/auth'

const routes = Router()

routes.post('/login',UserController.login)
routes.post('/create',UserController.create)
routes.get('/users',UserController.query)

routes.use(authMiddleware);
routes.get('/',CompanyController.query)

export default routes