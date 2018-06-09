const mongoose = require('mongoose')
const toJson = require('@meanie/mongoose-to-json');

const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
})

TodoSchema.plugin(toJson)

module.exports = mongoose.model('Todo', TodoSchema)
