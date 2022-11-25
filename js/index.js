(async () => {
    const express = require('express');
    const bodyParser = require('body-parser');
    const app = express();
    const Post = require('./models/empregado');

    // Body-parser
    app.use(bodyParser.urlencoded({extend: false}));
    app.use(bodyParser.json());

    // configura a view engine
    app.set('view engine', 'ejs');
    
    app.listen('8080', ()=> {
        console.log('Servidor rodando na porta 8080');
    });
    
    //await db.sync();
    console.log('Starting to connect to MySQL...');

    app.get('/', (req, res) => {
        res.render('../views/home');
    });

    app.post('/', (req, res) => {
        
        // simula um insert no banco
        Post.create({
        matricula: req.body.matricula, 
        nome: req.body.nome, 
        data_nascimento: req.body.data_nascimento, 
        sexo: req.body.sexo,
        salario: req.body.salario,
        supervisor: req.body.supervisor,
        departamento: req.body.departamento
        }).then(() => {
            res.send('Dados enviados com sucesso.');
        }).catch((err) => {
            res.send('Houve um erro: ' + err);
        });
        
    });

})();