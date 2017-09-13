import { multiplexer, connection } from './../ThriftClient'
import TUserService from '../../gen-nodejs/TUserService'

const thriftClient = {}

thriftClient.client = function () {
  return multiplexer.createClient('TUserService', TUserService, connection)
}

module.exports = thriftClient
