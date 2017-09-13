import koaBody from 'koa-body'
import logger from 'koa-logger'
import helmet from 'koa-helmet'
import cors from 'koa2-cors'

export const addBody = app => {
  app.use(koaBody())
}

export const addLogger = app => {
  app.use(logger())
}

export const addHelmet = app => {
  app.use(helmet())
}

export const addCors = app => {
  let options = {
    credentials: true
  }
  app.use(cors(options))
}
