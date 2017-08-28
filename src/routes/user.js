import Router from 'koa-router'
import { baseApi } from '../config'

import UserController from './../data/thrift/bbs/user/userController'

const api = 'user'

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

router.post('/add', UserController.add)

router.get('/users', UserController.users)

router.get('/:id', UserController.get)

router.put('/:id', UserController.update)

router.delete('/:id', UserController.remove)

export default router
