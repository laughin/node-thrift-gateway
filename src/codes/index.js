import _assign from 'lodash/assign'

import globalLoader from '../utils/global-loader'

let apiExceptionCodes = {}

globalLoader(__dirname, '/*.js').then(codes => {
  codes.forEach(code => {
    apiExceptionCodes = _assign(apiExceptionCodes, code)
  })
})

export default apiExceptionCodes
