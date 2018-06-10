const { generateTodo } = require('../../../utils/generate')

describe('the get todo', () => {
  let todo
  let createdTodo
  beforeEach(() => {
    todo = generateTodo()
    cy.request('POST', 'http://localhost:3000/api/todos', todo).then(response => {
      createdTodo = response.body
    })
  })
  it('should display a single todo from the database', () => {
    cy.visit(`http://localhost:3000/todo/${createdTodo.id}`);
    cy.contains(todo.title)
    cy.contains(todo.description)    
  })
})