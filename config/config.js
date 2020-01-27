require('dotenv').config()

module.exports = {
  development: {
    username: 'okeren',
    password: 'mypass',
    database: 'holds',
    host: '127.0.0.1',
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
