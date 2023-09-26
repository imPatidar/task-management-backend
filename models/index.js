const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const { DB_DATABASE, DB_USERNAME, DB_HOST, DB_PASSWORD } = process.env;

const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql',
});

const db = {};

// Import models and associate them
fs.readdirSync(__dirname)
    .filter(file => {
        return (
            file !== 'index.js' &&
            file.slice(-3) === '.js' &&
            !file.endsWith('.test.js')
        );
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

// Apply associations if defined in the models
Object.values(db)
    .filter(model => typeof model.associate === 'function')
    .forEach(model => model.associate(db));

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
