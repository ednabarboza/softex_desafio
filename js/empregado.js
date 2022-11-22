const Sequelize = require('sequelize');
const db = require('./db');

const Empregado = db.define('Empregado',
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

module.exports = Empregado;