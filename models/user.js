const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../db/sequelize')

const User = sequelize.define('User', {
    name: { 
        type: DataTypes.STRING,
        allowNull: false
    }
    ,
    uuid: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4
    }
})

sequelize.sync({
    force: false
})
module.exports = User
