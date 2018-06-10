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

    expect(response.text).toMatch(todo.title)
    expect(response.text).toMatch(todo.description)    
  })

  test('receives error message if todo was not found', async () => {
    // arrange
    const id = 'FAKE_INVALID_ID'
    // get invalid todo
    const response = await server.get(`/todo/${id}`)
    // assert the error message from server.
    expect(response.status).toBe(404)
    expect(response.body.message).toBe('Todo not found.')
  })
})