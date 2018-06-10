const faker = require('faker')

const { generateTodo } = require('../utils/generate')
const Todo = require('../src/database/models/Todo')

const server = require('../utils/setup')

describe('the todo creation process', () => {
  test('can create a todo', async () => {
    // fake some todo data
    const todo = generateTodo()
    // make POST request to server to create a todo
    const response = await server.post('/todos').send(todo)

    const todoFromDatabase = await Todo.find({ title: todo.title })

    expect(todoFromDatabase[0].title).toBe(todo.title)
    expect(todoFromDatabase[0].description).toBe(todo.description)
  })
})


