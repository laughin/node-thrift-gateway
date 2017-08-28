import systemCode from './../../../../codes/system'
import UserService from './userService'

class UserController {

  async add(ctx) {
    const formBody = ctx.request.body
    const result = {
      success: false,
      data: null,
      message: '',
      code: '',
    }
    try {
      const userResult = await UserService.add(formBody)

      if (userResult) {
        result.success = true
        result.data = userResult
      } else {
        result.message = systemCode.ERROR_SYS.desc
        result.code = systemCode.ERROR_SYS.code
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

  async update(ctx) {
    const formBody = ctx.request.body
    const result = {
      success: false,
      data: null,
      message: '',
      code: '',
    }
    try {
      const userResult = await UserService.update(ctx.params.id, formBody)

      if (userResult) {
        result.success = true
        result.data = userResult
      } else {
        result.message = systemCode.ERROR_SYS.desc
        result.code = systemCode.ERROR_SYS.code
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

  async get(ctx) {
    const result = {
      success: false,
      data: null,
      message: '',
      code: '',
    }
    try {
      const userResult = await UserService.get(ctx.params.id)

      result.success = true
      result.data = userResult

      ctx.body = result
    } catch (err) {
      console.log(err)
      if (err.name === 'CastError' || err.name === 'NotFoundError') {
        ctx.throw(404)
      }
      ctx.throw(500)
    }
  }

  async users(ctx) {
    const result = {
      success: false,
      data: null,
      message: '',
      code: '',
    }
    try {
      const userResult = await UserService.users()

      result.success = true
      result.data = userResult

      ctx.body = result
    } catch (err) {
      console.log(err)
      if (err.name === 'CastError' || err.name === 'NotFoundError') {
        ctx.throw(404)
      }
      ctx.throw(500)
    }
  }

  async remove(ctx) {
    const result = {
      success: false,
      data: null,
      message: '',
      code: '',
    }
    try {
      const userResult = await UserService.remove(ctx.params.id)

      if (userResult) {
        result.success = true
        result.data = userResult
      } else {
        result.message = systemCode.ERROR_SYS.desc
        result.code = systemCode.ERROR_SYS.code
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

export default new UserController()
