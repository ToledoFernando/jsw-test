const jwt = require('jsonwebtoken');

const verifiJWT = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const token = authorization.split(' ')[1]
    const xd = jwt.verify(token, 'toledo')
    console.log(xd)
    next()
  } catch (error) {
    res.status(403).json({ Error: "Token invalido" })
  }
}

module.exports = verifiJWT