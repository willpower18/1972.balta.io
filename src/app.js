const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

//Conecta no Banco
mongoose.connect(config.connectionString, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, });

//Carrega os Models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Oder = require('./models/order');

//Carrega as Rotas
const index = require('./Routes/index');
const products = require('./Routes/product');
const customers = require('./Routes/customer');
const orders = require('./Routes/order');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/products', products);
app.use('/customers', customers);
app.use('/orders', orders);

module.exports = app;