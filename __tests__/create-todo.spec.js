const faker = require('faker')
const supertest = require('supertest')

const app = require('../src/index')
const Todo = require('../src/database/models/Todo')

const server = supertest(app)

describe('the todo creation process', () => {
  test('can create a todo', async () => {
    // fake some todo data
    const todo = {
      title: faker.lorem.sentence(),
      description: faker.lorem.sentences(3),
      completed: false
    }
    // make POST request to server to create a todo
    const response = await server.post('/todos').send(todo)

    // assertions.
    // assert response has a message.
    expect(response.body.message).toBe('Todo created successfully.')
    // assert the database has a new todo.
    const todoFromDatabase = await Todo.find({ title: todo.title })

    expect(todoFromDatabase[0].title).toBe(todo.title)
    expect(todoFromDatabase[0].description).toBe(todo.description)
  })
})


