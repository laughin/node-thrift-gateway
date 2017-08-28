import ttypes from '../../gen-nodejs/userService_types'
import userClient from './userClient'

class UserService {

  constructor() {
    this.client = userClient.client()
  }

  add(formBody) {
    const user = new ttypes.User({
      username: formBody.username,
      password: formBody.password,
    })
	  return new Promise((resolve, reject) => {
      this.client.add(user, (err, resp) => {
        if (err) {
          reject(err)
				}
        resolve(resp)
			})
		})
	}

  update(id, formBody) {
    const user = new ttypes.User({
      id: id,
      username: formBody.username,
      password: formBody.password,
    })
	  return new Promise((resolve, reject) => {
      this.client.update(user, (err, resp) => {
        if (err) {
          reject(err)
				}
        resolve(resp)
			})
		})
	}

  get(id) {
	  return new Promise((resolve, reject) => {
      this.client.get(id, (err, resp) => {
        if (err) {
          reject(err)
        }
        resolve(resp)
			})
		})
	}

  users() {
	  return new Promise((resolve, reject) => {
      this.client.users((err, resp) => {
        if (err) {
          reject(err)
				}
        resolve(resp)
			})
		})
	}

  remove(id) {
	  return new Promise((resolve, reject) => {
      this.client.remove(id, (err, resp) => {
        if (err) {
          reject(err)
        }
        resolve(resp)
			})
		})
	}

}

export default new UserService()
