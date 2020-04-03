const MongoClient = require('mongodb').MongoClient
const uri = "mongodb://find_diapers:find_diapers@localhost:27017/?authSource=admin"

module.exports = (app) => {
    app.get('/diapers', (req, resp) => {
        console.log("Primeira requisição recebiida")
        MongoClient.connect(uri, (err, client) => {
            if (err) throw err;
            var db = client.db("find-diapers")
            db.collection("diapers").find().toArray((error, result) => {
                if (error) console.error("Erro ao buscar os produtos no banco")
                resp.json(result)
            })
        })
    })

    app.get('/stores', (req, resp) => {
        console.log("Primeira requisição recebiida")
        MongoClient.connect(uri, (err, client) => {
            if (err) throw err;
            var db = client.db("find-diapers")
            var query = 
            db.collection("diapers").distinct("store", (error, result) => {
                resp.json(result)
            } )
        })
    })

    
}