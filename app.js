const express = require("express");
const cors = require("cors")
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
    
app.post("/cadastro",(req, res)=>{
   const {nome, idade} = req.body;
   console.log("informações na rota de cadastro recebidas!") 

if (!nome||!idade){
    return res.status(400).send("ERRO: preencher campos obrigatórios!")
}
res.send(`${nome}, ${idade} anos enviado com sucesso!`)
})

app.listen (3000, () =>{
    console.log("Servidor rodando na porta 3000")
});