const Sequelize = require('sequelize');

export const dbConfig = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
})