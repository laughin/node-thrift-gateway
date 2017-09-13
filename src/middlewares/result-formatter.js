import {baseapi} from '../config'
import ApiExceptionCodes from './../codes'
import ApiException from '../exceptions/api-exception'

const formatter = ctx => {
  if (ctx.body && ctx.status == 200) {
    ctx.body = {
      code: 0,
      message: 'success',
      data: ctx.body
    }
  } else {
    ctx.body = {
      code: ctx.status,
      message: ctx.message
    }
  }
}

export const addResultFormatter = app => {
  app.use(async(ctx, next) => {
    const reg = new RegExp(`^/${baseapi}`)
    try {
      await next()
    } catch (error) {
      if (error instanceof Error && reg.test(ctx.originalUrl)) {
        ctx.status = 200
        ctx.body = {
          code: error.code || ApiExceptionCodes.ERROR_SYS.code,
          message: error.message
        }
      }
      throw error
    }
    reg.test(ctx.originalUrl) && formatter(ctx)
  })
}
