const faker = require('faker')

module.exports = {
  generateTodo: () => ({
    title: faker.lorem.sentence(),
    description: faker.lorem.sentences(3),
    completed: false
  })
}