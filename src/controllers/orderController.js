'use strict';

const repository = require('../repositories/order-repository');
const guid = require('guid');

exports.get = async (req, res, next) => {
    try{
        const response = await repository.get();
        res.status(200).send(response);
    }
    catch{
        res.status(500).send({message: 'Erro ao processar sua solicitação'})
    }
};

exports.post = async (req, res, next) => {
    try{
        await repository.create({
            customer: req.body.customer,
            number: guid.raw().substring(0,6),
            items: req.body.items
        });
        res.status(201).send({ message: 'Pedido Cadastrado com sucesso!'});
    }
    catch(e){
        res.status(500).send({ message: 'Falha ao cadastrar Pedido!', data: e });
    }
};