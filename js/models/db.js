const Sequelize = require('sequelize');

    const sequelize = new Sequelize('empresa', 'root', '*****', {
        host: 'localhost',
        dialect: 'mysql',
        define: {
            timestamps: false
        }
    });

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};