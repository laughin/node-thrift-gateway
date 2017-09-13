import chalk from 'chalk'
import thrift from 'thrift'

import { rpchost, rpcport } from './../../config'

const transport = thrift.TFramedTransport
const protocol = thrift.TBinaryProtocol

const connection = thrift.createConnection(rpchost, rpcport, {
  transport: transport,
  protocol: protocol
})
// const connection = thrift.createConnection(rpchost, rpcport, {
//   debug: true,
//   max_attempts: 5
// })

const multiplexer = new thrift.Multiplexer()

connection.on('error', (err) => {
  console.log(chalk.bold.white.bgRed(`❌  Thrift - ${err}`))
})

process.on('exit', function () {
  console.log(chalk.bold.white.bgGreen('*** BYE ***'))
  connection.end()
})

module.exports = {
  multiplexer,
  connection
}
