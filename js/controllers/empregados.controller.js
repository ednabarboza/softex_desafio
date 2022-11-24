const bancoSequelize = require('../db');

const getEmployees = async (req, res) => {
    const [rows] = await bancoSequelize.query('SELECT * FROM empregados')
    res.json(rows)
};

const getEmployee = async(req, res) => {
    const [rows] = await bancoSequelize.query('SELECT * FROM empregados WHERE Matricula = ?', [req.params.id])
    if (rows.length <= 0) {
        return res.status(404).json({message: 'Empregado não encontrado'});
    };

    res.json(rows[0]);
}

const createEmployees = async (req, res) => {
    const { Matricula, Nome, Data_Nasc, Sexo, Salario, Supervisor, Depto } = req.body
    const [rows] = await bancoSequelize.query('INSERT INTO empregados(Matricula, Nome, Data_Nasc, Sexo, Salario, Supervisor, Depto) VALUES (?,?,?,?,?,?,?)',
    [Matricula, Nome, Data_Nasc, Sexo, Salario, Supervisor, Depto])
    res.send({ rows })
};

const updateEmployess = async (req, res) => {
    const {id} = req.params
    const {Matricula, Nome, Data_Nasc, Sexo, Salario, Supervisor, Depto} = req.body

    const [result] = await bancoSequelize.query('UPDATE empregados SET Matricula = ?, Nome = ?, Nome = ?, Data_Nasc = ?, Sexo, Salario = ?, Supervisor = ?, Depto = ? WHERE Matricula = ?',
    [id, Matricula, Nome, Data_Nasc, Sexo, Salario, Supervisor, Depto]);

    if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Empregado não encintrado'});
    };

};

const deleteEmployess = async (req, res) => {
    const [result] = await bancoSequelize.query('DELETE FROM empregado WHERE Matricula = ?', [req.params.id]);
    if (result.affectedRows <= 0) {
        return res.status(404).json({ message: 'Empregado não encontrado' });
    };

    res.sendStatus(204);
};

module.exports = { getEmployees, getEmployee, createEmployees, updateEmployess, deleteEmployess };
