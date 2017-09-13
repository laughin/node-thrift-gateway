class ApiException extends Error {
  constructor(error) {
    super()
    this.code = error.code
    this.message = error.message
  }
}

module.exports = ApiException
