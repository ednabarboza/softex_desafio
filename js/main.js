(async () => {
    const express = require('express');
    const db = require('../js/db');
    const empregado = require('../js/empregado');
    const app = express();
  
    // configura a view engine
    app.set('view engine', 'ejs');
    
    app.listen('8080', ()=> {
        console.log('Servidor rodando na porta 8080');
    });
    
    await db.sync();
    console.log('Starting to connect to MySQL...');

    app.get('/', (req, res) => {
        res.render('../views/home');
    });

    app.post('/home', async (req, res) => {
        // vai pegar os valores do front 
        // e vai mandar pro banco
        const matricula = req.body.matricula
        const nome = req.body.nome
        const data_nascimento = req.body.data_nascimento
        const sexo = req.body.sexo
        const salario = req.body.salario
        const supervisor = req.body.supervisor
        const departamento = req.body.departamento

        // simula um insert no banco
        await empregado.create({
            matricula, 
            nome, 
            data_nascimento, 
            sexo,
            salario,
            supervisor,
            departamento
        });

        res.redirect('/');

    });

})();