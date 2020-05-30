/*var htttp = require('http');

htttp.createServer((request, response)=>{
    response.write('Primeiros passos com Node.js PANDA!');
    response.end();
}).listen(8081);

console.log('Servidor rodando em http://localhost:8081');
*/
var http = require('http');
var fs = require('fs');

http.createServer((request, response)=>{
    fs.readFile('index.html', ((erro, conteudo)=>{
        if(erro){
            console.log(erro);
        }else{
            response.write(conteudo);
        }
        response.end();
    }))
}).listen(8081);

console.log('Servidor rodando em http://localhost:8081');