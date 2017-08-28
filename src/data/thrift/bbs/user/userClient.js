import chalk from 'chalk'
import thrift from 'thrift'
import UserService from '../../gen-nodejs/UserService'

const thriftClient = {}

const transport = thrift.TFramedTransport
const protocol = thrift.TBinaryProtocol

const connection = thrift.createConnection("localhost", 5000, {
  transport: transport,
  protocol: protocol
})
// var connection = thrift.createConnection('localhost', 5000, {
//   debug: true,
//   max_attempts: 5
// })

const multiplexer = new thrift.Multiplexer()

connection.on('error', (err) => {
  console.log(chalk.bold.white.bgRed(`❌ Thrift - ${err}`))
})

process.on('exit', function () {
  console.log(chalk.bold.white.bgGreen('*** BYE ***'))
  connection.end()
})

thriftClient.client = function () {
  return multiplexer.createClient('UserService', UserService, connection)
}

module.exports = thriftClient
