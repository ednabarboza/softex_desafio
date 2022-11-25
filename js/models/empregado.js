const db = require('./db');

const Empregado = db.sequelize.define('Empregado',
{
    Matricula:
    {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Nome:
    {
        type: db.Sequelize.STRING
    },
    Data_Nasc:
    {
        type: db.Sequelize.DATE
    },
    Sexo:
    {
        type: db.Sequelize.CHAR
    },
    Salario:
    {
        type: db.Sequelize.FLOAT
    },
    Supervisor:
    {
        type: db.Sequelize.STRING
    },
    Depto:
    {
        type: db.Sequelize.STRING
    }
}
);

module.exports = Empregado;