const express = require('express');
const cors = require('cors');

const app = express();

// ==> Rotas da API (data):
const index = require('./routes/index');
const dataRoute = require('./routes/data.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/api/', dataRoute);

module.exports = app;