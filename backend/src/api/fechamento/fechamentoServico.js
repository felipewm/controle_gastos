const Fechamento = require('./fechamento')
const errorHandler= require('../common/errorHandler')

Fechamento.methods(['get', 'post', 'put', 'delete'])
Fechamento.updateOptions({ new: true, runValidators: true })
Fechamento.after('post', errorHandler).after('put', errorHandler)

Fechamento.route('get', (req, res, next) => {

Fechamento.find({}, (err, docs) => {
        if (!err) {
            res.json(docs)
        } else {
            res.status(500).json({ errors: [error] })
        }
    }).skip(req.query.skip).limit(req.query.limit)
})

Fechamento.route('count', (req, res, next) => {
    Fechamento.count((error, value) => {
        if (error) {
            res.status(500).json({ errros: [error] })
        } else {
            res.json({ value })
        }
    })
})


Fechamento.route('sumario', (req, res, next) => {
    Fechamento.aggregate([{
        $project: {venda:{ $sum:"$vendas.valor"}, compra:{ $sum:"$compras.valor"} }
    }, {
        $group: { _id: null, venda: { $sum: "$venda" }, compra: { $sum: "$compra" } }
    }, {
        $project: { _id: 0, venda: 1, compra: 1 }
    }], (error, result) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json(result[0] || { venda: 0, compra: 0 })
        }
    })
})

module.exports = Fechamento