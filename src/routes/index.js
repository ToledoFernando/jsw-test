const { Router } = require('express');
const getProducts = require('./products/products');
const user = require('./users/users');
const newUser = require('./newUser/newUser');

const route = Router();

route.use('/user', user);
route.use('/products', getProducts);
route.use('/newUser', newUser)
module.exports = route