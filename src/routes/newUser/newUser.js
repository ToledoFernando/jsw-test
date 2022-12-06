const { Router } = require('express');
const { newUser } = require('./newUserControllers')

const route = Router();

route.post('/', newUser);

module.exports = route;