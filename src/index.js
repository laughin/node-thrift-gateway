import 'babel-polyfill'
import Koa from 'koa'
import koaBody from 'koa-body'
import logger from 'koa-logger'
import helmet from 'koa-helmet'
import onerror from 'koa-onerror'
import mongoose from 'mongoose'
import cors from 'koa2-cors'
import chalk from 'chalk'

import { port, mongodb } from './config'
import routing from './routes/'

mongoose.connect(mongodb,{
  useMongoClient: true
}, (err) => {
  if (err) {
    console.error(chalk.bold.white.bgRed('Could not connect to MongoDB!'))
    console.log(chalk.bold.white.bgRed(err))
  }
})

const app = new Koa()

app.use(logger())
app.use(koaBody())
app.use(helmet())
app.use(cors())

onerror(app)

routing(app)

app.listen(port, () => console.log(chalk.bold.white.bgBlue(`✅  The server is running at http://localhost:${port}/`)))

export default app
