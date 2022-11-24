const Sequelize = require('sequelize');

    const bancoSequelize = new Sequelize('empresa', 'root', 'P3ndr@g0n', {
        host: 'localhost',
        dialect: 'mysql'
    });

module.exports = bancoSequelize;