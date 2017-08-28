import ActivityService from './activityService'
import activityCode from './../../../../codes/activity'

class ActivityController {

  async add(ctx) {
    const formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null,
      code: '',
    }

    const activity = await ActivityService.add(formData)

    if (!activity) {
      result.message = activityCode.FAIL_ACTIVITY_ADD.desc
      result.code = activityCode.FAIL_ACTIVITY_ADD.code
    } else {
      result.data = activity
      result.success = true
    }

    ctx.body = result
  }

  async update(ctx) {
    const formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null,
      code: '',
    }

    const activity = await ActivityService.update(formData)

    if (!activity) {
      result.message = activityCode.FAIL_ACTIVITY_UPDATE.desc
      result.code = activityCode.FAIL_ACTIVITY_UPDATE.code
    } else {
      result.data = activity
      result.success = true
    }

    ctx.body = result
  }

  async remove(ctx) {
    const result = {
      success: false,
      data: null,
      message: '',
      code: '',
    }
    try {
      const activity = await ActivityService.remove(ctx.params.id)
      if (!activity) {
        result.message = activityCode.FAIL_ACTIVITY_NO_EXIST.desc
        result.code = activityCode.FAIL_ACTIVITY_NO_EXIST.code
      } else {
        result.data = activity
        result.success = true
      }
      ctx.body = result
    } catch (err) {
      console.log(err)
    }
  }

  async get(ctx) {
    const result = {
      success: false,
      data: null,
      message: '',
      code: '',
    }
    try {
      const activity = await ActivityService.get(ctx.params.id)
      if (!activity) {
        result.message = activityCode.FAIL_ACTIVITY_NO_EXIST.desc
        result.code = activityCode.FAIL_ACTIVITY_NO_EXIST.code
      } else {
        result.data = activity
        result.success = true
      }
      ctx.body = result
    } catch (err) {
      console.log(err)
    }
  }

  async activities(ctx) {
    const result = {
      success: false,
      data: null,
      message: '',
      code: '',
    }
    try {
      const activities = await ActivityService.activities()
      if (!activities) {
        result.message = activityCode.FAIL_ACTIVITY_NO_EXIST.desc
        result.code = activityCode.FAIL_ACTIVITY_NO_EXIST.code
      } else {
        result.data = activities
        result.success = true
      }
      ctx.body = result
    } catch (err) {
      console.log(err)
      if (err.name === 'CastError' || err.name === 'NotFoundError') {
        ctx.throw(404)
      }
      ctx.throw(500)
    }
  }

}

export default new ActivityController()
