import development from './development'
import test from './test'
import production from './production'

module.exports = {
  development: development,
  test: test,
  production: production
}[process.env.NODE_ENV || 'development']
