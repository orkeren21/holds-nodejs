require('dotenv').config()

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: null,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres",
    operatorsAliases: false
  },
  test: {
    username: "or.keren",
    password: null,
    database: "holds_test",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: false
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: false
  }
};
