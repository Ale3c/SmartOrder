const express = require('express')
const app = express()

const database = require('./config/db')
 
database
    .authenticate()
    .then(() =>{
        console.log("Banco de dados conectado com sucesso")
    }).catch((msgErro) =>{
        console.log(msgErro)
    })


module.exports = app