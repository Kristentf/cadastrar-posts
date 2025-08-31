const Sequelize = require('sequelize');

//Conexão com o banco de dados  
const sequelize = new Sequelize('postApp','root', '1234',{
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = {
    Sequelize,
    sequelize
}

