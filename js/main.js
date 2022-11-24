(async () => {
    const express = require('express');
    const db = require('../js/db');
    const empregado = require('../js/empregado');
    const empregadosRoutes = require('../js/routes/empregados.routes');
    const app = express();

    //Interpretar os dados em JSON
    app.use(express.json());

    app.use('/api', empregadosRoutes);

  
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

    app.post('/', (req, res) => {
        // vai pegar os valores do front 
        // e vai mandar pro banco
        function enviar() {
        
        const matricula = req.params.matricula
        const nome = req.params.nome
        const data_nascimento = req.params.data_nascimento
        const sexo = req.params.sexo
        const salario = req.params.salario
        const supervisor = req.params.supervisor
        const departamento = req.params.departamento

        // simula um insert no banco
        empregado.create({
        matricula, 
        nome, 
        data_nascimento, 
        sexo,
        salario,
        supervisor,
        departamento
        });

        res.redirect('/');
        
    }

        enviar();

    });

})();