const Todo = require('../database/models/Todo')

module.exports = app => {
  app.get('/todos/new', (req, res) => {
    res.render('create')
  })

  app.get('/todo/:id', async (req, res) => {
    try {
      const todo = await Todo.findById(req.params.id)

      res.render('show', { todo })
    } catch (error) {
      return res.status(404).json({ message: 'Todo not found.' })
    }

  })
  app.post('/todos', async (req, res) => {
    const todo = await Todo.create(req.body)
  
    res.redirect(`/todo/${todo.id}`)
  })
}