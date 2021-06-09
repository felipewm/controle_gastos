//const { Mongoose } = require('mongoose')
const restful = require('node-restful')
const mongoose = restful.mongoose

const vendasSchema = new mongoose.Schema({
    nome: {type: String, required:true},
    valor: {type: Number, min: 0, required:true}
})
const comprasSchema = new mongoose.Schema({
    nome: {type: String, required:true},
    valor: {type: Number, min: 0, required:true}
})

const fechamento = new mongoose.Schema({
    nome: {type: String, required:true},
    mes: {type: Number, min:1, max:12, required:true},
    ano: {type: Number, min:1970, max:2100, required:true},
    vendas:[vendasSchema],
    compras:[comprasSchema]

})

module.exports = restful.model('Fechamento', fechamento)