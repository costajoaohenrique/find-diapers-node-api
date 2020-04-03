const MongoClient = require('mongodb').MongoClient
const uri = "mongodb://find_diapers:find_diapers@localhost:27017/?authSource=admin"


module.exports = (app) => {
    app.get('/diapers', function (req, resp) {
        console.log("Primeira requisição recebiida")
        MongoClient.connect(uri, (err, client) => {
            var db = client.db("find-diapers")
            var diaper = db.collection("diapers").find().toArray((error, result) => {
                console.log(result)

                resp.send(result)

            })


        })
    })
}