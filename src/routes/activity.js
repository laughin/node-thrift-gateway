import Router from 'koa-router'
import { baseApi } from '../config'

import ActivityController from './../data/mongo/official-site/activity/activityController'

const api = 'activity'

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

router.post('/add', ActivityController.add)

router.put('/update', ActivityController.update)

router.get('/activities', ActivityController.activities)

router.get('/:id',  ActivityController.get)

router.delete('/:id',  ActivityController.remove)

export default router
