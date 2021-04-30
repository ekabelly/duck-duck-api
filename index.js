require('dotenv').config({ path: './env/.env' });
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { errHandler } = require('./middlewares/middlewares');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1/duck', require('./controllers/duck.controller'));

app.use((err, req, res, next) => errHandler(err, req, res));

app.listen(process.env.PORT, () => console.log(`app listening on port ${process.env.PORT}`))