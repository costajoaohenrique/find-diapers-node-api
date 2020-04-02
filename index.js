var express = require("express")
var app = express()


app.listen(3000, function(){
    console.log("Iniciando find diapers API feito em node")
})

app.get('/teste', function(req, resp){
    console.log("Primeira requisição recebiida")
    resp.send("FIND DIAPERS API NODE")
})