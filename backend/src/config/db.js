const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//module.exports = mongoose.connect('mongodb://localhost/controle_gastos', 
//{ useNewUrlParser: true })

module.exports = mongoose.connect(
'mongodb+srv://admin:admin@cluster0.np5p4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
{ useNewUrlParser: true })

mongoose.Error.messages.general.required= "O atributo '{PATH} é obrigatório'"
mongoose.Error.messages.Number.min = "O 'VALUE' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O 'VALUE' informado é maior que o limite mínimo de '{MAX}'."

