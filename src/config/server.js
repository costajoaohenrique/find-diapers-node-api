var express = require("express")
var consign = require("consign")

module.exports = () => {
    var app = express()

    consign()
        .include("src/controllers")
        .into(app)
    
    return app
}