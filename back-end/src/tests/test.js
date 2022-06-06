const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../api/index.js')

chai.use(chaiHttp)
const expect = chai.expect

describe('get /buyers', () => {
  it('should return an array of buyers', () => {
    chai.request(app)
      .get('/buyers')
      .end((_err, res) => {
        expect(res).to.have.status(200)
        expect(res.body).to.be.an('array')

      })
  })
})

describe('get /providers', () => {
  it('should return an array of providers', () => {
    chai.request(app)
      .get('/providers')
      .end((_err, res) => {
        expect(res).to.have.status(200)
        expect(res.body).to.be.an('array')

      })
  })
})

describe('get /orders', () => {
  it('should return an array of orders', () => {
    chai.request(app)
      .get('/orders')
      .end((_err, res) => {
        expect(res).to.have.status(200)
        expect(res.body).to.be.an('array')

      })
  })
})



