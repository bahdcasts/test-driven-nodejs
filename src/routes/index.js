const Todo = require('../database/models/Todo')

module.exports = app => {
  app.get('/todo/:id', async (req, res) => {
    const todo = await Todo.findById(req.params.id)

    res.json({
      title: todo.title,
      description: todo.description,
      completed: todo.completed,
      id: todo.id
    })
  })
  app.post('/todos', async (req, res) => {
    const todo = await Todo.create(req.body)
  
    res.json({
      message: 'Todo created successfully.'
    })
  })
}