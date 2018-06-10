describe('the create todo page', () => {
  it('displays the form for creating a todo', () => {
    cy.visit('http://localhost:3000/todos/new')
  })
})