const express = require("express");
const cors = require("cors")
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// Mandar dados pro back
app.get("/cadastro",(req, res)=>{
    res.sendFile(__dirname+"/public/cadastro.html")
    console.log("Rota padrão acessada")
})

// Receber dados do front
app.post("/cadastro",(req, res)=>{
   const {nome, idade} = req.body;
   console.log("Dados enviados") 
res.send(`${nome}, ${idade} anos enviado com sucesso!`)
})

app.listen (3000, () =>{
    console.log("Servidor rodando na porta 3000")
});