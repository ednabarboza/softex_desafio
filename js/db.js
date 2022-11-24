const Sequelize = require('sequelize');

    const bancoSequelize = new Sequelize('empresa', 'root', '101218*', {
        host: 'localhost',
        dialect: 'mysql'
    });

module.exports = bancoSequelize;