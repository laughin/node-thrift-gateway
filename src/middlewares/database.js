import mongoose from 'mongoose'
import chalk from 'chalk'

import { env, mongodb } from './../config'

export const database = app => {
  mongoose.Promise = Promise

  if (env === 'development') {
    mongoose.set('debug', true)
  }

  mongoose.connect(mongodb, {
    useMongoClient: true
  })

  mongoose.connection.on('disconnected', () => {
    mongoose.connect(mongodb, {
      useMongoClient: true
    })
  })

  mongoose.connection.on('error', err => {
    console.error(chalk.bold.white.bgRed(`❌  Could not connect to MongoDB: ${err}`))
  })

  mongoose.connection.once('open', () => {
    console.log(chalk.bold.white.bgBlue(`✅  Connected to MongoDB!`))
  })
}
