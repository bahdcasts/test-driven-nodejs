const faker = require('faker')
const server = require('../utils/setup')

const { generateTodo } = require('../utils/generate')
const Todo = require('../src/database/models/Todo')

describe('get single todo', () => {
  test('can get single todo', async () => {
    // create a fake todo
    const todo = generateTodo()
    // persist the fake todo to the database
    const createdTodo = await Todo.create(todo)
    // fetch todo
    const response = await server.get(`/todo/${createdTodo.id}`)
    // assert the todo is returned.
    expect(response.body).toEqual({
      title: todo.title,
      description: todo.description,
      completed: todo.completed,
      id: expect.any(String)
    })
  })
})