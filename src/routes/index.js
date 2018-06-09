const Todo = require('../database/models/Todo')

module.exports = app => {
  app.post('/todos', async (req, res) => {
    const todo = await Todo.create(req.body)
  
    res.json({
      message: 'Todo created successfully.'
    })
  })
}