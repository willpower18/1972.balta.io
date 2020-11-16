'use strict'

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.get = async (email) => {
    const res = await Customer.find({ email: email }, 'name');
    return res;
};

exports.create = async (data) => {
    var customer = new Customer(data);
    await customer.save();
};
