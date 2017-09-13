import Router from 'koa-router'
import { baseapi } from './../../../config'

import ActivityController from './ActivityController'

const api = 'activity'

const router = new Router()

router.prefix(`/${baseapi}/${api}`)

router.post('/add', ActivityController.add)

router.put('/update', ActivityController.update)

router.get('/activities', ActivityController.activities)

router.get('/:id',  ActivityController.get)

router.delete('/:id',  ActivityController.remove)

export default router
