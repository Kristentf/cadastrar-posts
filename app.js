const express = require("express");
const app = express();

app.get("/",(req, res) => {
    res.send("Rota principal")
})
    
app.post("enviar",(req, res)=>{
   req.body()
   console.log("informações recebidas") 
})

app.listen (3000, () =>{
    console.log("Servidor rodando na porta 3000")
});