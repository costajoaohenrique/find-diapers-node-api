require("dotenv/config");
const MongoClient = require('mongodb').MongoClient
const DB_URI = process.env.DB_URI
const DB_NAME = process.env.DB_NAME


module.exports = (app) => {
    app.get('/diapers', (req, resp) => {

        let queryMongo = '{}'
        let queryParam = req.query.q

        if(queryParam){
            queryMongo = { $text: { $search: queryParam  } }
        }
        console.log(queryParam)
        MongoClient.connect(DB_URI, (err, client) => {
            if (err) throw err;
            var db = client.db(DB_NAME)
            db.collection("diapers").find(queryMongo).toArray((error, result) => {
                if (error){
                    console.error("Erro ao buscar os produtos no banco")
                    throw error
                } 
                 
                resp.json(result)
            })
        })
    })

    app.get('/stores', (req, resp) => {
        console.log("Primeira requisição recebiida")
        MongoClient.connect(DB_URI, (err, client) => {
            if (err) throw err;
            var db = client.db(DB_NAME)
            var query = 
            db.collection("diapers").distinct("store", (error, result) => {
                resp.json(result)
            } )
        })
    })

    app.get('/teste', (req, resp) => {
        console.log("Requisição da Rota Teste recebida")
        resp.send("Requisicao Recebida")
    })

    
}