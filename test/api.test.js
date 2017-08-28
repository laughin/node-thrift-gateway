import app from '../src/'
import supertest from 'supertest'
import { expect, should } from 'chai'

const temp = {}
const request = supertest.agent(app.listen())
should()

describe('POST /api/admin/signIn', () => {
  it('should signIn get token', (done) => {
    request
      .post('/api/admin/signIn')
      .set('Accept', 'application/json')
      .send({
        username: 'admin',
        password: '123123',
      })
      .expect(200, (err, res) => {
        temp.token = res.body.token
        done()
      })
  })
})

describe('POST /api/admin/signUp', () => {
  it('should add a admin user', (done) => {
    request
      .post('/api/admin/signUp')
      .set('Accept', 'application/json')
      .send({
        username: 'ss-__-',
        password: '123123',
        email: 'asds',
      })
      .expect(200, (err, res) => {
        temp.adminInfo = res.body
        done()
      })
  })
})

describe('GET /api/admin/7', () => {
  it('should get a admin user id number 7', (done) => {
    request
      .get('/api/admin/7')
      .set('Authorization', `Bearer ${temp.token}`)
      .set('Accept', 'application/json')
      .expect(200, (err, res) => {
        done()
      })
  })
})
