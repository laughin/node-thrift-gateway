import ActivityService from './ActivityService'
import ApiExceptionCodes from './../../../codes'
import ApiException from '../../../exceptions/api-exception'

class ActivityController {

  async add(ctx) {
    const formBody = ctx.request.body
    const activity = await ActivityService.add(formBody)
    if (!activity) {
      throw new ApiException(ApiExceptionCodes.ACTIVITY_ADD_FAIL)
    }
    ctx.body = activity
  }

  async update(ctx) {
    const formBody = ctx.request.body
    const activity = await ActivityService.update(formBody)
    if (!activity) {
      throw new ApiException(ApiExceptionCodes.ACTIVITY_UPDATE_FAIL)
    }
    ctx.body = activity
  }

  async remove(ctx) {
    const activity = await ActivityService.remove(ctx.params.id)
    if (!activity) {
      throw new ApiException(ApiExceptionCodes.ACTIVITY_NO_EXIST)
    }
    ctx.body = activity
  }

  async get(ctx) {
    const activity = await ActivityService.get(ctx.params.id)
    if (!activity) {
      throw new ApiException(ApiExceptionCodes.ACTIVITY_NO_EXIST)
    }
    ctx.body = activity
  }

  async activities(ctx) {
    ctx.body = await ActivityService.activities()
  }

}

export default new ActivityController()
