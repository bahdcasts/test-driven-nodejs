const supertest = require('supertest')

const app = require('../src')

module.exports = supertest(app)
