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

    const Empregado = sequelize.define('Empregado',
    {
        Matricula:
        {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        Nome:
        {
            type: Sequelize.STRING,
            allowNull: false
        },
        Data_Nasc:
        {
            type: Sequelize.DATE
        },
        Sexo:
        {
            type: Sequelize.CHAR
        },
        Salario:
        {
            type: Sequelize.FLOAT
        },
        Supervisor:
        {
            type: Sequelize.STRING
        },
        Depto:
        {
            type: Sequelize.STRING
        }
    }
    );

    await Empregado.sync();

};

connect();
module.exports = connect;