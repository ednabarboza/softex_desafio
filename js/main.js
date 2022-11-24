(async () => {
    const express = require('express');
    const db = require('./db');

    const app = express();
    
    app.listen('8080', ()=> {
        console.log('Servidor rodando na porta 8080');
    });
    
    db.connect();
    console.log('Starting to connect to MySQL...');

    app.get('/', (req, res) => {
        res.render('index.html');
    });

    /* Teste
    await empregado.create(
        {
            Matricula: 1,
            Nome: "Diego augusto",
            Data_Nasc: "2000-01-01",
            Sexo: "M",
            Salario: 2000.00,
            Supervisor: "nao",
            Depto: "Back-End"
        }
    )
    */
})();