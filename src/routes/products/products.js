const { Router } = require('express');
const { getProducts } = require('./productsControllers')

const route = Router();

route.get('/', getProducts)

module.exports = route;