const express = require('express')
const route = require('./routes/index');
const morgan = require('morgan')

const app = express();

app.use(morgan('dev'))
app.use(express.json())
app.use('/', route)

app.listen(4000, () => console.log("Server on Port 4000"))