const Sequelize = require('sequelize'),
  sequelize = new Sequelize(process.env.db_name || 'users', process.env.db_user || 'dbuser', process.env.db_pass || '123456', {
    host: 'localhost',
    dialect: 'mariadb',
    dialectOptions: {
      timezone: process.env.db_timezone || 'Etc/GMT0'
    },
    pool: {
      min: 0,
      max: 5,
      idle: 10000
    },
    define: {
      charset: 'utf8',
      timestamps: false
    },
    benchmark: false,
    logging: console.log,
    ssl: true
})

module.exports = sequelize