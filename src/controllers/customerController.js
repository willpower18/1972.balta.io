'use strict';

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/customer-repository');

exports.get = async (req, res, next) => {
    try{
        const response = await repository.get(req.body.email);
        res.status(200).send(response);
    }
    catch{
        res.status(500).send({message: 'Erro ao processar sua solicitação'})
    }
};

exports.post = async (req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.name, 3, 'O Nome deve ter pelo menos 3 caracteres');
    contract.hasMinLen(req.body.email, 3, 'O Email deve ter pelo menos 3 caracteres');
    contract.isEmail(req.body.email, 'Email Inválido!');
    contract.hasMinLen(req.body.password, 6, 'A Senha deve ter pelo menos 6 caracteres');

    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try{
        await repository.create(req.body);
        res.status(201).send({ message: 'Cliente Cadastrado com sucesso!'});
    }
    catch(e){
        res.status(500).send({ message: 'Falha ao cadastrar Cliente!', data: e });
    }
};