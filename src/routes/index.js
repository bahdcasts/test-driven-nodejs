const Todo = require('../database/models/Todo')

module.exports = app => {
  app.get('/todo/:id', async (req, res) => {
    const todo = await Todo.findById(req.params.id)

    res.json(todo)
  })
  app.post('/todos', async (req, res) => {
    const todo = await Todo.create(req.body)
  
    res.json({
      message: 'Todo created successfully.'
    })
  })
}