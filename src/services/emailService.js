'use strict'

const config = require('../config');
const sendGrid = require('sendgrid')(config.sendgridKey);

exports.send = async (to, subject, body) => {
    sendGrid.send({
        to,
        from: 'contato@wbsystems.com.br',
        subject,
        html: body
    });
}