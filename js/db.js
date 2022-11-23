const Sequelize = require('sequelize');

async function connect() {

    const sequelize = new Sequelize('empresa', 'root', '11111111', {
        host: 'localhost',
        dialect: 'mysql'
    });

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    };
};

connect();

module.exports = connect;