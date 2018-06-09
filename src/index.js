const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const Todo = require('./database/models/Todo')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/')

app.post('/todos', async (req, res) => {
  const todo = await Todo.create(req.body)

  res.json({
    message: 'Todo created successfully.'
  })
})

if (!module.parent) {
  app.listen(3000)
}

module.exports = app
