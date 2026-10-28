
//importação do express
const express = require('express');
//passando a função express para a constante app
const app = express(); 

//rota principal
app.get('/',function(req,res){
    res.send("Olá mundo");
});

//para conseguir testar o server de forma local
app.listen(8081,function(){
    console.log("Servidor rodando na porta 8081");
}); 