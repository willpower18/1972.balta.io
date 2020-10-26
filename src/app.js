const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//Conecta no Banco
mongoose.connect('mongodb+srv://admin:balta123@principal.fuhvy.gcp.mongodb.net/balta?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, });

//Carrega os Models
const Product = require('./models/product');

//Carrega as Rotas
const index = require('./Routes/index');
const products = require('./Routes/product');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/products', products);

module.exports = app;