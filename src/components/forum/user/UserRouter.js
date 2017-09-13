import Router from 'koa-router'
import { baseapi } from './../../../config'

import UserController from './UserController'

const api = 'user'

const router = new Router()

router.prefix(`/${baseapi}/${api}`)

router.post('/add', UserController.add)

router.get('/users', UserController.users)

router.get('/:id', UserController.get)

router.put('/:id', UserController.update)

router.delete('/:id', UserController.remove)

export default router
