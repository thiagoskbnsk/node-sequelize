const express = require('express')
const bodyParser = require('body-parser');

require('./database');

const routes = require('./routes');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

app.listen(PORT, HOST);