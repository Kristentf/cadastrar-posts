const Sequelize = require('sequelize');
const sequelize = new Sequelize("nomes_test","root","1234", {
    host: "localhost", 
    dialect: "mysql"
});


// CRIAR MODEL PARA POSTAGENS
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteúdo:{
        type: Sequelize.TEXT
    }
})

Postagem.sync({force: true})