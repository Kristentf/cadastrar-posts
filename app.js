const express = require("express");
const app = express();
const exphbs = require("express-handlebars")
const {Sequelize} = require('sequelize')
const bodyparser = require('body-parser');
const { FORCE } = require("sequelize/lib/index-hints");


// Config
    // Template engine
    app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    app.use(express.urlencoded({extended:true}))
    app.use(express.json())
    // 
    
    
    // Conexão com o banco de dados  
    sequelize = new Sequelize('nomes_test','root', '1234',{
        host: 'localhost',
        dialect: 'mysql',
    });

// Rotas
    // Rota GET
    app.get('/',(req,res)=>{
        res.render("formularios");
    });

    app.post('/enviar',(req,res)=>{
        res.send(`Título: ${req.body.titulo} Conteúdo: ${req.body.conteudo}`)
        console('Dados enviados com sucesso!!')
    })

app.listen (3000, () =>{
    console.log("Servidor rodando na porta 3000");
}); 