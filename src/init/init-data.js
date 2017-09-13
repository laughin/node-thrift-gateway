import fs from 'fs'
import chalk from 'chalk'

import logConfig from './../config/log-config'

class InitData {

  async confirmPath(pathStr) {
    if (!fs.existsSync(pathStr)) {
      await fs.mkdirSync(pathStr)
      console.log(chalk.bold.white.bgBlue(`✅  CreatePath: ${pathStr}`))
    }
  }

  async initLogPath() {
    if (logConfig.baseLogPath) {
      await this.confirmPath(logConfig.baseLogPath)
      for (const appender of logConfig.appenders) {
        await this.confirmPath(logConfig.baseLogPath + appender.path)
      }
    }
  }

}

export default new InitData()
