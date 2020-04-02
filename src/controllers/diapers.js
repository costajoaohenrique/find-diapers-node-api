module.exports = function (app) {
    app.get('/diapers', function (req, resp) {
        console.log("Primeira requisição recebiida")
        resp.send("Diapers Find Diapers ---- Node")
    })
}