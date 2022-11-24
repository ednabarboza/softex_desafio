const Sequelize = require('sequelize');

    const bancoSequelize = new Sequelize('empresa', 'root', '', {
        host: 'localhost',
        dialect: 'mysql'
    });

module.exports = bancoSequelize;