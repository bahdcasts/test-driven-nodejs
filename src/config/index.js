module.exports = {
  MONGODB_URI: process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/',
  PORT: process.env.PORT ? process.env.PORT : 3000
}