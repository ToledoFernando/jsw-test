const jwt = require('jsonwebtoken');

const newUser = (req, res) => {
  const { email, password } = req.body;
  //expiresIn en segundos
  const token = jwt.sign({ email, password }, 'toledo', { expiresIn: 20 })
  res.json(token)
}

module.exports = { newUser };