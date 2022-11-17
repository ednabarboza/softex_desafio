/* Esse módulo contém a conexão e as funções de manipulação do banco de dados */

// Info do banco de dados
const user = 'user'
const pssw = '111111111'
const host = 'localhost'
const port = '3306'
const database = 'empresa'
const table = 'empregado'

// Conexão com o banco de dados
async function connect(){
    // Verifica se já há uma conexão ativa. Se tiver, retorna a mesma
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection(`mysql://${user}:${pssw}@${host}:${port}/${database}`);
    console.log('Sucessfully connected to MySQL!');
    global.connection = connection;
    return connection;
}

// Listagem de registros - retorna um array de objetos, onde cada objeto é um registro da tabela
async function select(){
    const connection = await connect();
    const [rows] = await connection.query(`SELECT * FROM ${table};`);
    return rows;
}

// Inserção de registros - o parâmetro é um objeto com os atributos nome, nasc, sexo, salario, supervisor e depto
async function insert(funcionario){
    const connection = await connect();
    const sql = `INSERT INTO ${table}(NOME, DATA_NASC, SEXO, SALARIO, SUPERVISOR, DEPTO) VALUES (?,?,?,?,?,?);`;
    const values = [funcionario.nome, funcionario.nasc, funcionario.sexo, funcionario.salario, funcionario.supervisor, funcionario.depto];
    await connection.query(sql, values);
}

// Atualização de registros existentes
async function update(matricula, funcionario){
    const connection = await connect();
    const sql = `UPDATE ${table} SET NOME=?, DATA_NASC=?, SEXO=?, SALARIO=?, SUPERVISOR=?, DEPTO=? WHERE MATRICULA=?;`;
    const values = [funcionario.nome, funcionario.nasc, funcionario.sexo, funcionario.salario, funcionario.supervisor, funcionario.depto, matricula];
    await connection.query(sql, values);
}

// Apagar registros
async function erase(matricula){
    const connection = await connect();
    const sql = `DELETE FROM ${table} WHERE MATRICULA=?;`;
    await connection.query(sql, [matricula]);
}

module.exports = { connect, select, insert, update, erase }