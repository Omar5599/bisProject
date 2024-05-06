const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const cartRouter = require('./routes/cartRoutes');
const authRouter = require('./routes/authRoutes');
const homeRouter = require('./routes/homeRoutes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cartRouter);
app.use(authRouter);
app.use(homeRouter);


module.exports = app;