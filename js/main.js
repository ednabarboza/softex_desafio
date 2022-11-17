(async () => {
    const express = require('express');
    const db = require('./db');

    const app = express();

    app.listen('8080', ()=> {
        console.log('Servidor rodando na porta 8080');
    });
    
    db.connect();
    console.log('Starting to connect to MySQL...');

    // O código abaixo é só para teste
    const funcionarios = [{nome:'Zezinho',nasc:'1995-03-01',sexo:'M',salario:'2000',supervisor:'Ruy',depto:'backend'},
		                  {nome:'Astrogildo',nasc:'1998-10-15',sexo:'M',salario:'3000',supervisor:'Rey',depto:'frontend'},
                          {nome:'Beltrana',nasc:'2005-09-19',sexo:'F',salario:'900',supervisor:'Ray',depto:'estagio'},
                          {nome:'Fulana',nasc:'2000-01-07',sexo:'F',salario:'1200',supervisor:'Rey',depto:'frontend'},
                          {nome:'Sicrana',nasc:'2001-11-05',sexo:'F',salario:'3200',supervisor:'Ruy',depto:'backend'}];
    
    funcionarios.forEach(async (funcionario) => {
        await db.insert(funcionario);
    });
    
    const func = await db.select();
    console.log(func);

    await db.update(1, {nome:'Zé',nasc:'1998-05-20',sexo:'M',salario:'3500',supervisor:'Rey',depto:'frontend'});

    await db.erase(2);

    const f = await db.select();
    console.log(f);

})()