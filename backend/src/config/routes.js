const express = require('express')

module.exports = function(server){
    
    const router = express.Router()
    server.use('/api', router)

    //Rotas
    const Fechamento = require('../api/fechamento/fechamentoServico')
    Fechamento.register(router, '/fechamentos')
}