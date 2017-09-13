import 'babel-polyfill'
import Koa from 'koa'
import chalk from 'chalk'
import {resolve} from 'path'
import R from 'ramda'

import {host, port} from './config'
import InitData from './init/init-data'

const app = new Koa()

const MIDDLEWARES = ['logger', 'result-formatter', 'commons', 'database', 'routes']

const useMiddlewares = app => {
  return R.map(
    R.compose(
      R.map(i => i(app)),
      require,
      i => `${resolve(__dirname, './middlewares')}/${i}`
    )
  )
}

const start = async() => {
  await InitData.initLogPath()
  await useMiddlewares(app)(MIDDLEWARES)
  app.listen(port, () => {
    console.log(chalk.bold.white.bgBlue(`✅  NODE_ENV=${process.env.NODE_ENV} and the server is running at http://${host}:${port}/`))
  })
}

start()
