//----Abaixo utilizando o Express
var express = require('express');
var app = express();

app.use(express.static('public'));

var path = require('path');

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/public/pages/index.html");
});
app.get('/sobre', (req, res)=>{
    res.sendFile(__dirname + "/public/pages/sobre.html");
});
app.get('/contato', (req, res)=>{
    res.sendFile(__dirname + "/public/pages/contato.html");
});

app.listen(8080,()=>{
    console.log('Iniciou sim!');
});