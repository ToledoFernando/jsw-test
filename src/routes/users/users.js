const { Router } = require('express')
const { getUser } = require('./userController')
const verifiJWT = require('../../middlewares/jwt');

const route = Router();

route.get("/", verifiJWT, getUser);

module.exports = route;